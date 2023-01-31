import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useRouter } from "next/router";

import Cookies from "js-cookie";
export function routerFunction() {
  const router = useRouter();
  console.log(router.pathname);
}

export default function middleware(req: NextRequest) {
  let initialtoken = req.cookies.get("isloggedin");
  let url = req.nextUrl.clone();
  

  if (
    initialtoken?.value == "false" &&

    (url.pathname === "/About_us" ||
      url.pathname === "/Contact" ||url.pathname === "/" ||
      url.pathname === "/Menu" ||
      url.pathname === "/Review")
  ) {
    console.log("url.pathname", url.pathname);
    url.pathname = "/SignIn";
    return NextResponse.rewrite(url);
  }
}
