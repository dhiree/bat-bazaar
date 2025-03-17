import User from "../models/userModel.js";

async function createUserService(data) {
    try {
        let newUser = await User.create(data);
        return newUser;
    } catch (err) {
        console.error("Error in createUserService:", err);
        throw err; 
    }
}

export default {
    createUserService
};
