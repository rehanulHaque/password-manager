import { auth } from '@/auth';
import PasswordComponent from '@/components/PasswordComponent';
import passwordModel from '@/models/passwordModel'
import { User } from '@/models/userModel';
import { connectToDatabase } from '@/utils/connectDB';
export const revalidate = 30;

export default async function page() {
  const session = await auth();
  await connectToDatabase()
  const userId = await User.findOne({ googleId: session?.user?.id });
  const passwords = await passwordModel.find({owner: userId?._id});
  const serializedPasswords = JSON.parse(JSON.stringify(passwords));
  const ownerId = JSON.stringify(userId?._id)
  return (
    <section className="relative">
      <h1 className="text-3xl font-bold text-gray-700 my-10">
        Save your Password
      </h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Copy password
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Website Link
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {serializedPasswords?.map((password: any) => {
              return (
                <PasswordComponent key={password._id} password={password} userId={ownerId} />
              );
            })}
          </tbody>
        </table>
      </div>

      
    </section>
  )
}
