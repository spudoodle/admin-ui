import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get("jiitak-auth-cookie");

  const authenticated = !!authCookie?.value;
  const { pathname } = request.nextUrl;
  const publicRoutes = ["/login", "/forgot-password"];

  if (authenticated && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!authenticated && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo|icons|images|fonts).*)",
  ],
};
