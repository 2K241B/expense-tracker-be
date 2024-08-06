import express from "express"
import { getUsers, createUser } from "../controller/user.js"

const userRouter = express.Router()

userRouter.get('/', getUsers).post('/', createUser)

export { userRouter } // named export




