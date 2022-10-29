import express from "express";
import { registerUser,loginUser,getUser, getUsers } from "../controllers/userControllers.js";
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/getUser', getUser)
router.get('/getUsers', getUsers)


export default router