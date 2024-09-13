"use client"

import { FormEvent, useState } from "react";
import { ImCross } from "react-icons/im";
import { toast } from "sonner"

interface PasswordTypes {
  password: {
    _id: string;
    title: string;
    email: string;
    phone: string;
    username: string;
    websitelink: string;
    password: string;
  };
  userId: string;
}

export default function PasswordComponent({ password, userId }: PasswordTypes) {
    const [openModal, setOpenModal] = useState(false);
    const [key, setKey] = useState("");

    const handelCopy = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch(`${process.env.HOST_URL}/api/decrypt`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ key, passwordId: password._id, userId }),
        })
        const data = await response.json();
        if(data.decrypted) {
          navigator.clipboard.writeText(data.decrypted)
          toast.success("Password Copied sucessfully")
        }else{
          toast.error("Something went wrong")
        }
    }

    const handelDelete = async (e: FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      const response = await fetch(`${process.env.HOST_URL}/api/password`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ passwordId: password._id, userId }),
      })
      const data = await response.json();
      console.log(data)
      if(data.status == 200) {
        toast.success("Password deleted sucessfully")
        }else{
          toast.error("Something went wrong")
        }
    }
  return (
    <>
    <tr className="bg-white border-b " key={password._id}>
      <td className="px-6 py-4">
        <button onClick={() => setOpenModal(!openModal)}>Copy</button>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {password.title}
      </th>

      <td className="px-6 py-4">{password.email}</td>
      <td className="px-6 py-4">{password.phone}</td>
      <td className="px-6 py-4">{password.username}</td>
      <td className="px-6 py-4">{password.websitelink}</td>
      <td className="px-6 py-4">{password.password}</td>
      <td className="px-6 py-4">
        <form onSubmit={handelDelete}>
          <button>Delete</button>
        </form>
      </td>
    </tr>


    <div
        className={`${openModal ? "block" : "hidden"} ${
          openModal ? "fixed" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
              <h3 className="text-xl font-semibold text-gray-900 ">
                Enter Key to Get Password
              </h3>
              <button
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                onClick={() => setOpenModal(!openModal)}
              ><ImCross className="text-black" />
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handelCopy}>
                <div>
                  <label
                    htmlFor="key"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Key
                  </label>
                  <input
                    type="text"
                    id="key"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="********************************"
                    required
                    onChange={(e) => setKey(e.target.value)}
                    value={key}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Copy Password
                </button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
