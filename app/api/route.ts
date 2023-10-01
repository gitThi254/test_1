import connectDB from "@/libs/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    return NextResponse.json({ message: "hello" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "fail to connect" + error },
      { status: 500 }
    );
  }
}
