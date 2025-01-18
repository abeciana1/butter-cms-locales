import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", request.nextUrl.pathname);
    requestHeaders.set("x-search-param", request.nextUrl.searchParams)
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
