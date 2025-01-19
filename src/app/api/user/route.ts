import { NextResponse } from "next/server";
import data from "@/constants/user_data.json";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { currentPage, limit } = body;

    const slicedData = data.slice(
      (currentPage - 1) * limit,
      (currentPage - 1) * limit + limit
    );

    if (slicedData) {
      return NextResponse.json(
        { data: slicedData, total: data?.length },
        { status: 200 }
      );
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
