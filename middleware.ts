import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { nextUrl } = request;

  requestHeaders.set("x-pathname", nextUrl.pathname);
  requestHeaders.set("x-locale", nextUrl.pathname.split('/')[1])
  requestHeaders.set("x-subdir", nextUrl.pathname.split('/')[2]);
  requestHeaders.set("x-search-param", nextUrl.searchParams.toString())

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
