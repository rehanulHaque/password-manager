import NextAuth, { AuthError } from "next-auth"
import Google from "next-auth/providers/google"
import { connectToDatabase } from "./utils/connectDB"
import { User } from "./models/userModel"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn: async({user, account}) =>{
      if(account?.provider === "google"){
        try{
          const {email, name, image, id} = user
          await connectToDatabase()
          const alreadyUser = await User.findOne({email})
          if(!alreadyUser) {
            await User.create({
              name: name,
              email: email,
              avatar: image,
              googleId: id
            })
          }
          return true
        } catch (error){
          console.log(error)
          throw new AuthError("Error While creating user")
        }
      }
      return false
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub || "";
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  }
})