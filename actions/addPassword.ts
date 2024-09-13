"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const addPassword = async (formdata: FormData) => {
  const session = await auth();
  let userId;
  if (session?.user?.email) {
    userId = session?.user?.id;
  }
  const obj = {
    email: formdata.get("email"),
    phone: formdata.get("phone"),
    title: formdata.get("title"),
    username: formdata.get("username"),
    websitelink: formdata.get("websitelink"),
    password: formdata.get("password"),
    key: formdata.get("key"),
    encrypt: formdata.get("encrypt"),
    userId,
  };
  const response = await fetch(`${process.env.HOST_URL}/api/password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
  const data = await response.json()
  if(data.status == 200) {
    redirect("/dashboard")
  }
};