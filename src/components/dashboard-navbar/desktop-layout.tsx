"use client";

import { ICON_MAPPING, NAV_LAYOUT } from "@/constants/dashboard-left-nav";
import { ProfileIcon } from "@/utils/icons";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const DashboardNavDesktop = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-[208px] min-w-[208px] bg-white border-r border-r-dashboard-nav-border h-screen sticky top-0 flex flex-col">
        <div className="px-4 pt-[19px]">
          <Link href={"/"}>
            <Image
              src={"/logo/logo.svg"}
              alt="JIITAK Logo"
              width={"24"}
              height={"24"}
              className="w-[130px] h-[20px]"
            />
          </Link>
        </div>
        <div className="mt-[32px] flex flex-col gap-2">
          {NAV_LAYOUT?.map((item) => {
            const IconComponent =
              ICON_MAPPING[item?.icon as keyof typeof ICON_MAPPING];
            const iconColor = pathname === item?.link ? "#FF9500" : "#676562";

            return (
              <Link
                key={`dashboard-left-nav-${item?.id}-id`}
                href={item?.link}
                className={classNames({
                  "h-[40px] px-4 flex items-center gap-[10px] border-r-[3px] text-sm":
                    true,
                  "border-r-primary-color bg-[#FFF4E6] font-bold text-primary-color":
                    item?.link === pathname,
                  "border-r-transparent hover:bg-gray-100":
                    item?.link !== pathname,
                })}
              >
                <IconComponent color={iconColor} />
                <p>{item?.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex-grow">
        <div className="min-h-[55px] bg-white border-b border-b-dashboard-nav-border sticky top-0 flex flex-col items-end justify-center px-4">
          <Link href={"/settings"}>
            <ProfileIcon />
          </Link>
        </div>
        {children}
      </div>
    </>
  );
};
