import { dbConnect } from "@/app/libs/dbConnect";
import Todo from "@/app/models/Todo";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { title, completed } = await request.json();
  await dbConnect();
  await Todo.findByIdAndUpdate(id, { title, completed });
  return NextResponse.json({ message: "Todo updated" }, { status: 200 });
}

export async function GET(request:NextRequest,  { params }: { params: { id: string } }) {
  const { id } = params;
  await dbConnect();
  const todo = await Todo.findOne({ _id: id });
  return NextResponse.json({ todo }, { status: 200 });
}