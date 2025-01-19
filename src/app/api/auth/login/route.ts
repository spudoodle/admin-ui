import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { userEmail, userPassword } = body;

    if (
      userEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      userPassword === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        { message: "Login successful!" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "An error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
