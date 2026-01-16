import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host === "stats.acta.build" || host.startsWith("stats.acta.build:")) {
    return NextResponse.redirect(
      "https://us.posthog.com/shared/Hsleyk7g3zP5ny1eEoB4h0viBONr_w",
      302
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
