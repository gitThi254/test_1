import connectDB from "@/libs/connectDB";
import Test from "@/models/test";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    // const test = await Test.find();
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
  await connectDB();
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
