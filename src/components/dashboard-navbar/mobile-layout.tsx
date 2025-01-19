"use client";

import { ICON_MAPPING, NAV_LAYOUT } from "@/constants/dashboard-left-nav";
import { CloseIcon, HamburgerIcon, ProfileIcon } from "@/utils/icons";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const DashboardNavMobile = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="nav-section w-full sticky top-0">
        <div className="flex items-center justify-between px-4 min-h-[55px] bg-white border-b border-b-dashboard-nav-border">
          <Link href={"/"}>
            <Image
              src={"/logo/logo.svg"}
              alt="JIITAK Logo"
              width={"24"}
              height={"24"}
              className="w-[130px] h-[20px]"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="z-[1000]"
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="bg-white w-[75%] sm:w-[40%] h-screen absolute top-0 right-0 border-l border-l-dashboard-nav-border flex flex-col z-[999]">
            <div className="flex-grow mt-24 flex flex-col gap-2">
              {NAV_LAYOUT?.map((item) => {
                const IconComponent =
                  ICON_MAPPING[item?.icon as keyof typeof ICON_MAPPING];
                const iconColor =
                  pathname === item?.link ? "#FF9500" : "#676562";

                return (
                  <Link
                    key={`dashboard-left-nav-${item?.id}-id`}
                    onClick={() => setIsMenuOpen(false)}
                    href={item?.link}
                    className={classNames({
                      "h-[40px] px-4 flex items-center gap-[10px] border-l-[3px] text-sm":
                        true,
                      "border-l-primary-color bg-[#FFF4E6] font-bold text-primary-color":
                        item?.link === pathname,
                      "border-l-transparent": item?.link !== pathname,
                    })}
                  >
                    <IconComponent color={iconColor} />
                    <p>{item?.title}</p>
                  </Link>
                );
              })}
            </div>
            <Link
              href={"/settings"}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="self-end p-8"
            >
              <ProfileIcon size={28} />
            </Link>
          </div>
        )}
      </div>
      {children}
    </>
  );
};
