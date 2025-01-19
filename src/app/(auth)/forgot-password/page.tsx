"use client";

import { PrimaryButton } from "@/components/buttons/primary-button";
import { Input } from "@/components/inputs/input";
import { CircularLoader } from "@/components/loaders/circular-loader";
import { SuccessIcon } from "@/utils/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function ForgotPassword() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState<string>("");
  const [invalidEmailError, setInvalidEmailError] = useState<boolean>(false);
  const [isLoading, setIsLoding] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsLoding(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = userEmail && emailPattern?.test(userEmail);
    setInvalidEmailError(!isEmailValid);

    if (!isEmailValid) {
      setIsLoding(false);
      return;
    }

    toast(
      <div className="flex items-center gap-2">
        <SuccessIcon />
        <p className="text-[13px] text-primary-black">
          パスワード再設定用URLを送信しました
        </p>
      </div>,
      {
        className: "w-max",
      }
    );
    setIsLoding(false);
    router?.push("/login");
  };

  return (
    <div className="flex-grow self-center justify-center md:justify-start md:mt-32 flex flex-col gap-4 w-full max-w-[400px] px-4 sm:px-0">
      <h1 className="font-medium text-[28px] text-center text-primary-black">
        パスワード再設定
      </h1>
      <p className="text-sm text-center leading-[20.27px] text-secondary-black">
        現在使っているメールアドレスを入力してください。
        <br />
        パスワード再設定用のURLをメールで送信いたします。
      </p>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 mt-5">
        <Input
          label={"メールアドレス"}
          id={"password-reset-mail-input"}
          type={"email"}
          error={invalidEmailError}
          errorMessage={"有効なメールアドレスを入力してください"}
          handleChange={setUserEmail}
        />
        <PrimaryButton
          label={
            isLoading ? <CircularLoader /> : "パスワード再設定用URLを送信する"
          }
          disabled={isLoading}
          customClass={"mt-2"}
        />
        <Link
          href={"/login"}
          className="text-center font-medium text-sm mt-4 text-primary-black"
        >
          ログイン画面にもどる
        </Link>
      </form>
    </div>
  );
}
