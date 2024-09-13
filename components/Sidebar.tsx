// "use client"
import { login } from "@/actions/login";
import { logOut } from "@/actions/logOut";
import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { TbPassword } from "react-icons/tb";
import AuthButton from "./AuthButton";

export default async function Sidebar() {
  const session = await auth();
  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0`}
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <RxDashboard />
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/addpassword"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <TbPassword />
              <span className="flex-1 ms-3 whitespace-nowrap">
                Add Password
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/genkey"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <IoKeyOutline />
              <span className="ms-3">Generate Key</span>
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <FaRegUserCircle />
              <span className="ms-3">Profile</span>
            </Link>
          </li>
          <AuthButton/>
        </ul>
      </div>
    </aside>
  );
}
