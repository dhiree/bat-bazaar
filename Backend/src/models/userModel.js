import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String
    },
    password:{
        type:String
    },
    role: {
        type: String,
        enum: ["seller", "buyer", "admin"],
        required: true,
        default: "buyer",
      },
},
{
    timestamps:true
})

const User = mongoose.model("User",userSchema)

export default User