import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  googleId: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
});

export const User = mongoose.models?.user || mongoose.model("user", userSchema);
