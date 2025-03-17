import express from "express";
import userService from "../service/userService.js";

async function createUser(req, res) {
    try {
        let data = req.body; 
        let user = await userService.createUserService(data);

        if (!user) {
            return res.status(400).json({ message: "Failed to create user" });
        }

        return res.status(201).json({
            message: "User Created Successfully",
            data: user
        });

    } catch (err) {
        console.error("Error in createUser:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export default {
    createUser
};
