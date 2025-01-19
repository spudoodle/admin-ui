import {
  AdministratorIcon,
  DashboardIcon,
  GiftIcon,
  UsersIcon,
} from "@/utils/icon-color";

export const ICON_MAPPING = {
  DashboardIcon,
  UsersIcon,
  GiftIcon,
  AdministratorIcon,
};

interface NavItem {
  id: string;
  title: string;
  link: string;
  icon: keyof typeof ICON_MAPPING;
}

export const NAV_LAYOUT: NavItem[] = [
  {
    id: "dashboard",
    title: "ダッシュボード",
    link: "/",
    icon: "DashboardIcon",
  },
  {
    id: "users",
    title: "登録ユーザー",
    link: "/users",
    icon: "UsersIcon",
  },
  {
    id: "winners",
    title: "当選者",
    link: "/winners",
    icon: "GiftIcon",
  },
  {
    id: "administrator",
    title: "運営管理者",
    link: "/administrator",
    icon: "AdministratorIcon",
  },
];
