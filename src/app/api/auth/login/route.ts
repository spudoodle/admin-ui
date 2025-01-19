import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userEmail, userPassword } = body;

    if (!userEmail || !userPassword) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    if (
      userEmail === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      userPassword === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        { message: "Login successful!" },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        Allow: "POST",
        "Content-Type": "application/json",
      },
    }
  );
}
