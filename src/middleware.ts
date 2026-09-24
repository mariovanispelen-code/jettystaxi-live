import { NextRequest, NextResponse } from "next/server";

const LOCALES = new Set(["en", "zh", "ja"]);

export function middleware(request: NextRequest) {
  const seg = request.nextUrl.pathname.split("/").filter(Boolean)[0];
  const locale = LOCALES.has(seg ?? "") ? (seg as string) : "nl";
  const dir = "ltr";

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-taxi-locale", locale);
  requestHeaders.set("x-taxi-dir", dir);
  requestHeaders.set("x-taxi-pathname", request.nextUrl.pathname);

  const res = NextResponse.next({
    request: { headers: requestHeaders },
  });
  res.cookies.set("taxi-locale", locale, { path: "/", sameSite: "lax" });
  res.headers.set("x-taxi-locale-res", locale);
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|mov|webm|m4v)$).*)",
  ],
};
