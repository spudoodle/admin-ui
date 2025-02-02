"use client";

import { useAuthContext } from "@/context/useAuthContext";
import { LogoutIcon } from "@/utils/icons";
import React from "react";

export default function Settings() {
  const { setAuthenticated } = useAuthContext();

  const handleLogout = () => {
    document.cookie = `jiitak-auth-cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax;`;
    setAuthenticated(false);
    window.location.href = "/login";
  };

  return (
    <div className="p-8">
      <button
        onClick={handleLogout}
        className="bg-white w-[75%] max-w-[200px] h-[40px] rounded-lg shadow-md flex items-center justify-center gap-2"
      >
        <LogoutIcon />
        <span className="text-sm text-primary-black font-medium">
          ログアウト
        </span>
      </button>
    </div>
  );
}
