import { createUserRole, deleteUserRole, getRoles } from "../Controllers/userRoleControllers.js";
import express from "express";
const router = express.Router()

router.post('/createRole', createUserRole)
router.post('/deleteRole', deleteUserRole)
router.get('/roles', getRoles)

export default router