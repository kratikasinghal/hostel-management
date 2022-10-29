import express from "express";
import { registerUser, authUser} from "../Controllers/userControllers.js";
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', authUser)
// router.get('/getUser', getUser)
// router.get('/getUsers', getUsers)


export default router