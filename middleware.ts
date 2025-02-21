import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log('locale test', request.nextUrl.pathname.split('/'))
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  // requestHeaders.set("x-locale", )
  requestHeaders.set("x-subdir", request.nextUrl.pathname.split('/')[1]);
  requestHeaders.set("x-search-param", request.nextUrl.searchParams.toString())
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
