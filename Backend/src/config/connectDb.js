import mongoose from "mongoose";


const connectDb = async (req, res) => {
    try {
        const data = await mongoose.connect(process.env.MONGO_URL)
        if (data) {
            console.log("Mongoo Not Connect")
        }else{
            console.log("Mongoose Is Not Connect..................")
        }

    } catch (err) {
        console.log("Error ", err)
    }
}

export default connectDb