import passwordModel from "@/models/passwordModel";
import { connectToDatabase } from "@/utils/connectDB";
import { decryptPassword } from "@/utils/encrypt";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectToDatabase();
    const { key, passwordId, userId } = await request.json();

    if (key.length !== 32) {
      return NextResponse.json(
        { message: "key length must be 32" },
        { status: 400 }
      );
    }
    const newUserId = userId.replace(/"/g, "");
    const userObjectId = new mongoose.Types.ObjectId(newUserId);
    const password = await passwordModel.findOne({
      _id: passwordId,
      owner: userObjectId,
    });
    if (!password) {
      return NextResponse.json(
        { message: "Password not found" },
        { status: 200 }
      );
    }
    const decrypted = decryptPassword(password.password, key);
    if (!decrypted) {
      return NextResponse.json({ message: "Invalid key" }, { status: 200 });
    }

    return NextResponse.json({ decrypted }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Something went wrong",
      },
      {
        status: error.status || error.code || 500,
      }
    );
  }
}
