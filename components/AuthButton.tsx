
import { login } from "@/actions/login";
import { logOut } from "@/actions/logOut";
import { auth } from "@/auth";
import { PiSignInBold } from "react-icons/pi";

export default async function AuthButton() {
  const session = await auth();
  const user = session?.user?.email;
  if (user) {
    return (
      <li>
        <form
          action={async () => {
            "use server"
            await logOut();
          }}
        >
          <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <PiSignInBold />
            <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
          </button>
        </form>
      </li>
    );
  }
  return (
    <li>
      <form
        action={async () => {
            "use server"
          await login();
        }}
      >
        <button className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <PiSignInBold />
          <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
        </button>
      </form>
    </li>
  );
}
