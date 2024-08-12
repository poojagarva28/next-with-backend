import { dbConnect } from "@/app/libs/dbConnect";
import Todo from "@/app/models/Todo";
import { NextRequest, NextResponse } from "@/node_modules/next/server";

export async function GET() {
  await dbConnect();
  const todos = await Todo.find({});
  return NextResponse.json({ todos });
}

export async function POST(request: NextRequest) {
  const { title, completed } = await request.json();
  await dbConnect();
  await Todo.create({ title, completed });
  return NextResponse.json({ message: "Todo Added" }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  await dbConnect();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
}
