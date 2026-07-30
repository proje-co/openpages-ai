import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const res = NextResponse.next();
  const override =
    url.searchParams.get("host") ||
    req.headers.get("x-openpages-host") ||
    req.headers.get("host") ||
    "localhost:3002";
  res.headers.set("x-openpages-host", override);
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
