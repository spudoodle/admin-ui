"use client";

import { SearchInput } from "@/components/inputs/search-input";
import {
  LeftChevronIcon,
  RightChevronIcon,
  UpChevronIcon,
} from "@/utils/icons";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { UserList } from "./user-list";
import ReactPaginate from "react-paginate";
import { CircularLoaderColored } from "@/components/loaders/circular-loader-colored";

interface TableHeader {
  id: string;
  title: string;
  customStyle: string;
}

const TABLE_HEADERS: TableHeader[] = [
  {
    id: "nickname",
    title: "ニックネーム",
    customStyle: "min-w-[202px]",
  },
  {
    id: "email-address",
    title: "メールアドレス",
    customStyle: "min-w-[315px]",
  },
  {
    id: "dob",
    title: "生年月",
    customStyle: "min-w-[116px]",
  },
  {
    id: "sex",
    title: "性別",
    customStyle: "min-w-[107px]",
  },
  {
    id: "residence",
    title: "居住地",
    customStyle: "min-w-[92px]",
  },
  {
    id: "registration-date",
    title: "登録日",
    customStyle: "min-w-[244.24px]",
  },
];

export default function Users() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<[] | null>(null);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentSearchQuery, setCurrentSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isFilterDesc, setIsFilterDesc] = useState<boolean>(false);
  const LIMIT = 10;

  const fetchUserData = async () => {
    setIsLoading(true);

    try {
      if (currentSearchQuery) {
        const response = await fetch(`/api/user/query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            search: currentSearchQuery,
            currentPage: currentPage + 1,
            limit: LIMIT,
          }),
        });

        const result = await response.json();
        setData(result?.data);
        setTotalCount(result?.total);
      } else {
        const response = await fetch(`/api/user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentPage: currentPage + 1,
            limit: LIMIT,
          }),
        });

        const result = await response.json();
        setData(result?.data);
        setTotalCount(result?.total);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [currentPage, currentSearchQuery]);

  const handleSearch = async () => {
    setCurrentPage(0);
    setCurrentSearchQuery(searchQuery);
  };

  const renderTableBody = () => {
    if (isLoading) {
      return (
        <tbody className="flex-grow">
          <tr>
            <td colSpan={TABLE_HEADERS.length + 1}>
              <div className="flex items-center justify-start pl-12 sm:pl-0 sm:justify-center h-full">
                <CircularLoaderColored />
              </div>
            </td>
          </tr>
        </tbody>
      );
    }

    if (
      !data ||
      data?.length === 0 ||
      (currentSearchQuery && data.length === 0)
    ) {
      return (
        <tbody className="flex-grow">
          <tr>
            <td colSpan={TABLE_HEADERS.length + 1}>
              <div className="flex items-center justify-center h-full text-center">
                表示するデータがありません
              </div>
            </td>
          </tr>
        </tbody>
      );
    }

    return <UserList userData={data} />;
  };

  return (
    <div className="h-[calc(100vh-55px)] w-full lg:w-[calc(100vw-208px)] min-[1920px]:w-[calc(1920px-208px)]">
      <div className="h-full flex flex-col">
        <div className="px-4 lg:px-8 pt-8 pb-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between">
            <h1 className="font-medium text-xl text-primary-black">
              登録ユーザー一覧
            </h1>
            <SearchInput
              placeholder="ニックネーム / メールアドレスで検索"
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
            />
          </div>
        </div>

        <div className="flex-1 px-4 lg:px-8 pb-8 overflow-hidden">
          <div className="h-full rounded-lg flex flex-col">
            <div
              className={classNames({
                "overflow-auto rounded-lg": true,
                "flex flex-grow":
                  isLoading ||
                  !data ||
                  data?.length === 0 ||
                  (currentSearchQuery && data.length === 0),
              })}
            >
              <table className="w-full min-w-[1152px] table-auto">
                <thead className="lg:sticky lg:top-0 lg:z-10 h-[56px] bg-white">
                  <tr>
                    <th className="">
                      <div className="min-w-[75.76px] pl-4 flex items-center gap-1">
                        <p className="font-medium text-[15px] text-user-table-title">
                          No.
                        </p>
                        <button
                          onClick={() => setIsFilterDesc((prev) => !prev)}
                          className={classNames({
                            "rotate-180": isFilterDesc,
                            "rotate-0": !isFilterDesc,
                          })}
                        >
                          <UpChevronIcon size={18} />
                        </button>
                      </div>
                    </th>
                    {TABLE_HEADERS?.map((header) => (
                      <th
                        key={`user-table-header-${header?.id}-id`}
                        className={`px-4 ${header?.customStyle}`}
                      >
                        <div className="font-medium text-[15px] text-user-table-title text-left">
                          {header?.title}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                {renderTableBody()}
              </table>
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-0 items-center justify-between pt-8">
              <div className="text-sm text-gray-600">
                {totalCount}人中 - {Math?.min(LIMIT, data?.length ?? 0)}人表示
              </div>
              <div>
                <ReactPaginate
                  previousLabel={<LeftChevronIcon size={8} />}
                  nextLabel={<RightChevronIcon size={8} />}
                  breakLabel={"..."}
                  pageCount={Math.ceil(totalCount / LIMIT)}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={(data) => setCurrentPage(data?.selected)}
                  forcePage={currentPage}
                  containerClassName="flex items-center justify-center gap-[8px]"
                  previousLinkClassName="bg-white w-[36px] h-[32px] rounded-[4px] flex items-center justify-center"
                  nextLinkClassName="bg-white w-[36px] h-[32px] rounded-[4px] flex items-center justify-center"
                  pageClassName="bg-white text-black rounded-[4px]"
                  pageLinkClassName="w-[36px] h-[32px] rounded-[4px] flex items-center justify-center text-sm p-[6px]"
                  activeLinkClassName="bg-[#FF9500] text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
