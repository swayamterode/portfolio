import { NextResponse } from "next/server";

export const ApiResponse = (status: number, message: string) => {
  const success = status >= 200 && status < 300;
  return new NextResponse(JSON.stringify({ message, success }), { status });
};
