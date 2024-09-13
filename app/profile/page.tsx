import { logOut } from "@/actions/logOut"
import { auth } from "@/auth"
import Image from "next/image"
import { PiSignInBold } from "react-icons/pi"

export default async function page() {
  const session = await auth()
  if(!session?.user?.email) return null
  return (
    <div className="flex items-center justify-start h-screen">
      <div>
        <Image src={session.user.image || ""} width={100} height={100} alt="" className="rounded-full"/>
        <h1 className="text-xl"><span>Name: </span>{session.user.name}</h1>
        <h1 className="text-xl"><span>Email: </span>{session.user.email}</h1>
        <form
          action={async () => {
            "use server"
            await logOut();
          }}
        >
          <button className="flex items-center p-2 bg-gray-900 text-white rounded-lg dark:text-whittext-gray-900 hover:bg-gray-600 hover:text-white transition-all group">
            <PiSignInBold />
            <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
          </button>
        </form>
      </div>
    </div>
  )
}
