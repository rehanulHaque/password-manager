import mongoose from "mongoose"

export const connectToDatabase = async () => {
    try{
      if(mongoose.connections && mongoose.connections[0].readyState){
        return
      }
      const {connection} = await mongoose.connect(process.env.DB_URL!, {
        dbName: "Password-Manager",
      })
      console.log("Db Connected")
    } catch(e){
      throw new Error("Error connecting to db")
    }
  }