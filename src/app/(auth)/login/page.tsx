"use client";

import { PrimaryButton } from "@/components/buttons/primary-button";
import { Input } from "@/components/inputs/input";
import { CircularLoader } from "@/components/loaders/circular-loader";
import { useAuthContext } from "@/context/useAuthContext";
import { ErrorIcon } from "@/utils/icons";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

export default function Login() {
  const { setAuthenticated } = useAuthContext();

  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [invalidEmailError, setInvalidEmailError] = useState<boolean>(false);
  const [invalidPasswordError, setInvalidPasswordError] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setCookie = (email: string) => {
    const cookieValue = `jiitak-auth-${email}`;
    const secure = window.location.protocol === "https:" ? "Secure;" : "";
    const date = new Date();
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

    document.cookie = `jiitak-auth-cookie=${cookieValue}; expires=${date.toUTCString()}; path=/; SameSite=Lax; ${secure}`;

    const cookieExists = document.cookie
      .split(";")
      .some((item) => item.trim().startsWith("jiitak-auth-cookie="));
    if (!cookieExists) {
      console.error("Failed to set cookie");
      throw new Error("Cookie setting failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsLoading(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = userEmail && emailPattern?.test(userEmail);
    setInvalidEmailError(!isEmailValid);

    const isPasswordValid = !!userPassword;
    setInvalidPasswordError(!isPasswordValid);

    if (!isEmailValid || !isPasswordValid) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail, userPassword }),
      });

      if (response?.status === 401) {
        toast(
          <div className="flex items-center gap-2">
            <ErrorIcon />
            <p className="text-[13px]">
              メールアドレスかパスワードに誤りがあります
            </p>
          </div>,
          {
            className: "w-max",
          }
        );
        return;
      }

      if (response?.status === 200) {
        try {
          setCookie(userEmail);
          setAuthenticated(true);

          if (document.cookie.includes("jiitak-auth-cookie")) {
            const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL || "/";
            window.location.href = baseUrl;
          } else {
            throw new Error("Authentication failed");
          }
        } catch (err) {
          console.log(err);

          toast(
            <div className="flex items-center gap-2">
              <ErrorIcon />
              <p className="text-[13px] text-primary-black">
                認証に失敗しました。もう一度お試しください。
              </p>
            </div>,
            {
              className: "w-max",
            }
          );
        }
      }
    } catch (err) {
      console.error(err);
      toast(
        <div className="flex items-center gap-2">
          <ErrorIcon />
          <p className="text-[13px] text-primary-black">
            ログインに失敗しました。もう一度お試しください。
          </p>
        </div>,
        {
          className: "w-max",
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex-grow self-center justify-center md:justify-start md:mt-32 flex flex-col gap-8 w-full max-w-[400px] px-4 sm:px-0">
      <h1 className="font-medium text-[28px] text-center text-primary-black">
        ログイン
      </h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <Input
          label={"メールアドレス"}
          id={"login-mail-input"}
          type={"email"}
          error={invalidEmailError}
          errorMessage={"有効なメールアドレスを入力してください"}
          handleChange={setUserEmail}
        />
        <Input
          label={"パスワード"}
          id={"login-password-input"}
          type={"password"}
          error={invalidPasswordError}
          errorMessage={"有効なパスワードを入力してください"}
          handleChange={setUserPassword}
        />
        <PrimaryButton
          label={isLoading ? <CircularLoader /> : "ログイン"}
          disabled={isLoading}
          customClass={"mt-2"}
        />
        <Link
          href={"/forgot-password"}
          className="text-center font-medium text-sm mt-4 text-primary-black"
        >
          パスワードをお忘れの場合
        </Link>
      </form>
    </section>
  );
}
