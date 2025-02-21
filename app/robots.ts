import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse("User-agent: *\nDisallow: http://odiador.dev/", {
    headers: { "Content-Type": "text/plain" },
  });
}
