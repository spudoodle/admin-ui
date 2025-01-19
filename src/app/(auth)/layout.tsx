import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-primary-bg flex flex-col">
      <nav className="border-b border-b-nav-border px-2 py-4 md:p-6">
        <Link href={"/"}>
          <div className="relative w-[150px] h-[20px] md:w-[188px] md:h-[30.06px]">
            <Image src={"/logo/logo.svg"} alt="JIITAK Logo" fill />
          </div>
        </Link>
      </nav>
      {children}
    </section>
  );
}
