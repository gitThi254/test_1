import connectDB from "@/libs/connectDB";
import Test from "@/models/test";
import { NextResponse } from "next/server";
connectDB();

export async function GET() {
  try {
    return NextResponse.json({ message: "hello" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "fail to connect" + error },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const test = await req.json();
  try {
    await Test.create(test);
    return NextResponse.json(
      { message: "create test successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "fail to connect" + error },
      { status: 500 }
    );
  }
}
