import { DashboardNavDesktop } from "@/components/dashboard-navbar/desktop-layout";
import { DashboardNavMobile } from "@/components/dashboard-navbar/mobile-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="flex flex-col lg:hidden">
        <DashboardNavMobile>{children}</DashboardNavMobile>
      </div>

      <div className="hidden lg:flex flex-grow">
        <DashboardNavDesktop>{children}</DashboardNavDesktop>
      </div>
    </section>
  );
}
