import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  requestHeaders.set("x-locale", request.nextUrl.pathname.split('/')[1])
  requestHeaders.set("x-subdir", request.nextUrl.pathname.split('/')[2]);
  requestHeaders.set("x-search-param", request.nextUrl.searchParams.toString())
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
