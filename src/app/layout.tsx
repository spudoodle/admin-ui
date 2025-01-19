import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { AuthProvider } from "@/context/auth-context";

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JIITAK Assignment",
  description: "JIITAK assignment for React.js position",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} antialiased font-sans bg-primary-bg min-h-screen flex flex-col items-center`}
      >
        <main className="w-full max-w-[1920px]">
          <AuthProvider>{children}</AuthProvider>
          <Toaster position="bottom-center" />
        </main>
      </body>
    </html>
  );
}
