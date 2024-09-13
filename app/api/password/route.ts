import passwordModel from "@/models/passwordModel";
import { User } from "@/models/userModel";
import { connectToDatabase } from "@/utils/connectDB";
import { encryptPassword } from "@/utils/encrypt";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDatabase();
        const {title, email, phone, username, websitelink, password, key, encrypt, userId} = await request.json();
        if(!password || !title || !key || !email){
            return NextResponse.json({message: "Password, title, key and email are required"}, {status: 400})
        }
        if(key.length !== 32){
            return NextResponse.json({message: "Minimun length of key is 32"}, {status: 400})
        }
        const ownerId = await User.findOne({googleId: userId}).select("_id");

        if(!ownerId){
            return NextResponse.json({message: "User not found"}, {status: 404})
        }
        if(encrypt){
            const encrypted = encryptPassword(password, key)
            const passwordInstance = await passwordModel.create({password: encrypted, websitelink, title, owner: ownerId, email, username, phone})
            return NextResponse.json({message: "Password created successfully"}, {status: 201})
        }
        const passwordInstance = await passwordModel.create({password, websitelink, title, owner: ownerId, email, username, phone})
        return NextResponse.json({
            message: "Password created successfully"
        }, {
            status: 201
        })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message || "Something went wrong"
        }, {
            status: error.status || error.code || 500
        })
    }
}


export async function DELETE(request: NextRequest) {
    try {
        const { key, passwordId, userId } = await request.json();
        await connectToDatabase();
        const newUserId = userId.replace(/"/g, "");
    const userObjectId = new mongoose.Types.ObjectId(newUserId);
        const passwords = await passwordModel.findOneAndDelete({
            _id: passwordId,
            owner: userObjectId,
        });
        if (!passwords) {
            return NextResponse.json(
              { message: "Password not found" },
              { status: 200 }
            );
          }
        return NextResponse.json({message: "Password deleted Sucessfully"}, {
            status: 200 
        })
    } catch (error: any) {
        return NextResponse.json({
            message: error.message || "Something went wrong"
        }, {
            status: error.status || error.code || 500
        })
    }
}