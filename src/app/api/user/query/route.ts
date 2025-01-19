import { NextResponse } from "next/server";
import data from "@/constants/user_data.json";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { search, currentPage, limit } = body;

    const filteredData = data?.filter(
      (x) =>
        x?.email?.toLowerCase().includes(search) ||
        x?.nickname?.toLowerCase().includes(search)
    );

    if (filteredData) {
      if (filteredData?.length > limit) {
        const slicedData = filteredData.slice(
          (currentPage - 1) * limit,
          (currentPage - 1) * limit + limit
        );

        return NextResponse.json(
          { data: slicedData, total: filteredData?.length },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { data: filteredData, total: filteredData?.length },
          { status: 200 }
        );
      }
    } else {
      return NextResponse.json({ data: [], total: 0 }, { status: 200 });
    }
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "An error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
