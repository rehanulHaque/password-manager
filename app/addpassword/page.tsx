import { addPassword } from "@/actions/addPassword";

export default function page() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-gray-700 my-10">Add Password</h1>
      <form className="flex flex-col gap-4" action={addPassword}>
      <div className="max-w-xl">
          <label htmlFor="title">Email*</label>
          <input
            type="text"
            placeholder="example@example.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name='email'
          />
        </div>
        <div className="max-w-xl">
          <label htmlFor="title">Phone</label>
          <input
            type="number"
            placeholder="1234567890"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name='phone'
          />
        </div>
        <div className="max-w-xl">
          <label htmlFor="title">Title*</label>
          <input
            type="text"
            placeholder="example"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name='title'
          />
        </div>
        <div className="max-w-xl">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            placeholder="john doe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name='username'
          />
        </div>
        <div className="max-w-xl">
          <label htmlFor="websitelink">Website link</label>
          <input
            type="text"
            placeholder="https://example.com"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name='websitelink'
          />
        </div>
        <div className="max-w-xl">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            placeholder="********"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name='password'
          />
        </div>
        <div className="max-w-xl">
          <label htmlFor="password">Key</label>
          <input
            type="password"
            placeholder="KEY"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            name='key'
          />
        </div>
        <div className="max-w-xl">
          <label htmlFor="encrypt" className="mr-3">
            Encrypt your password
          </label>
          <input type="checkbox" id="ecnrypt" name="encrypt" value="true" />
        </div>
        <div className="max-w-xl">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </div>
      </form>
    </section>
  )
}
