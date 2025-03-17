import express from "express";
import userController from "../controller/userController.js"


const router = express.Router()

router.post("/create",userController.createUser)
router.get("/")
router.get("/")
router.put("/")
router.delete("/")


export default router