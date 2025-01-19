import Chart from "@/lib/chart/chart";
import { DownArrowIcon, UpArrowIcon } from "@/utils/icons";
import classNames from "classnames";

interface Statistic {
  id: number;
  title: string;
  subTitle: string;
  count?: number;
  scale: string;
  secondaryTextCount?: number;
  secondaryText: string;
  growth: string;
  percentage?: string;
  customStyle?: string;
}

const OVERALL_STATISTICS: Statistic[] = [
  {
    id: 1,
    title: "ユーザー登録数累計",
    subTitle: "dummy",
    count: 450,
    scale: "人",
    secondaryTextCount: 400,
    secondaryText: "人 (前月時点の累計）",
    growth: "true",
    percentage: "12.5",
  },
  {
    id: 2,
    title: "アクティブユーザー",
    subTitle: "2024年2月1日 - 2024年2月5日",
    count: 50,
    scale: "人 / 今月",
    secondaryTextCount: 12,
    secondaryText: "人 (前月時点）",
    growth: "true",
    percentage: "316.6",
  },
  {
    id: 3,
    title: "定着率",
    subTitle: "2024年1月1日 - 2024年1月31日",
    count: 10,
    scale: "% / 前月",
    secondaryTextCount: 12,
    secondaryText: "% (前々月）",
    growth: "false",
    percentage: "16.6",
  },
  {
    id: 4,
    title: "平均検索回数",
    subTitle: "2024年2月1日 - 2024年2月5日",
    count: 4,
    scale: "回 / 今月",
    secondaryTextCount: 2,
    secondaryText: "回 (前月の今日時点）",
    growth: "true",
    percentage: "100",
    customStyle: "xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-2",
  },
  {
    id: 5,
    title: "抽選利用回数",
    subTitle: "2024年2月1日 - 2024年2月5日",
    count: 125,
    scale: "回 / 今月",
    secondaryTextCount: 85,
    secondaryText: "回 (前月の今日時点）",
    growth: "true",
    percentage: "47",
    customStyle: "xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3",
  },
  {
    id: 6,
    title: "アカウント削除数",
    subTitle: "2024年2月1日 - 2024年2月5日",
    count: 10,
    scale: "人 / 今月",
    secondaryTextCount: 8,
    secondaryText: "人 (前月の今日時点）",
    growth: "true",
    percentage: "25",
    customStyle: "xl:col-start-4 xl:col-end-5 xl:row-start-2 xl:row-end-3",
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {OVERALL_STATISTICS?.map((item) => (
        <div
          key={`dashboard-statistic-element-${item?.id}-id`}
          className={`w-full bg-white rounded-lg shadow-[0_4px_20px_0px_#EDEAE480] flex flex-col ${item?.customStyle}`}
        >
          <div className="px-[14px] pt-5 pb-[24px] border-b-[1.5px] border-b-dashboard-nav-border flex flex-col gap-1">
            <h2 className="text-[15px] text-primary-black">{item?.title}</h2>
            {item?.subTitle === "dummy" ? (
              <p className="text-xs text-secondary-black invisible">
                {item?.subTitle}
              </p>
            ) : (
              <p className="text-xs text-secondary-black">{item?.subTitle}</p>
            )}
          </div>
          <div className="pt-4 px-[14px] pb-6 flex flex-col gap-1">
            <h1 className="text-primary-black">
              <span className="font-medium text-[32px]">
                {item?.count ?? "-"}
              </span>
              <span className="font-bold text-sm pl-1">{item?.scale}</span>
            </h1>
            <div className="flex items-center justify-between">
              <p className="text-sm text-secondary-black">
                <span>{item?.secondaryTextCount ?? "-"}</span>
                <span>{item?.secondaryText}</span>
              </p>
              <div
                className={classNames({
                  "flex items-center justify-center rounded-[3.8px] py-[2px] px-[6px] gap-[1px] min-w-[59px]":
                    true,
                  "bg-[#E7F7EB]": item?.growth === "true",
                  "bg-[#FFEBEA]": item?.growth === "false",
                  "bg-[#E8E8E7]": item?.growth === "default",
                })}
              >
                {item?.growth === "true" ? (
                  <UpArrowIcon size={10} />
                ) : item?.growth === "false" ? (
                  <DownArrowIcon size={10} />
                ) : (
                  <></>
                )}
                <p
                  className={classNames({
                    "font-medium text-[13px]": true,
                    "text-green-accent": item?.growth === "true",
                    "text-error-red": item?.growth === "false",
                    "text-secondary-black": item?.growth === "default",
                  })}
                >
                  {item?.percentage ?? 0}%
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="w-full h-fit sm:col-span-2 lg:col-span-3 xl:col-span-2 xl:row-span-3 bg-white rounded-lg p-4 shadow-[0_4px_20px_0px_#EDEAE480] overflow-x-scroll">
        <Chart />
      </div>
    </div>
  );
}
