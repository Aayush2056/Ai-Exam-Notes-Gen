import mongoose from "mongoose";
const connectDb = async ()=>{
       try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected DB");
       } catch (error) {
         console.log(error.message);
       }
}
export default connectDb;