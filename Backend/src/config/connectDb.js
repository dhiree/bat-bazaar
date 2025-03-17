import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDb = async (req, res) => {
    try {
        const data = await mongoose.connect(process.env.MONGO_URI)
        if (data) {
            console.log("Mongoo Connect Successfully.......")
        }else{
            console.log("Mongoose Is Not Connect..................")
        }

    } catch (err) {
        console.log("Error ", err)
    }
}

export default{ connectDb}