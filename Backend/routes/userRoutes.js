import express from "express";
import { registerUser, authUser, getProfile, getUsers} from "../Controllers/userControllers.js";
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', authUser)
router.get('/getProfile', getProfile)
router.get('/getUsers', getUsers)


export default router