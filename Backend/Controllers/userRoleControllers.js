import expressAsyncHandler from "express-async-handler";
import slugify from '../utils/slugify.js';
import Role from "../models/userRoleModel.js";

//@desc create a new user role
//@route /api/userRole/createRole
//@access PUBLIC
const createUserRole = expressAsyncHandler( async(req,res) => {
    const {role} = req.body
    const slug = slugify(role)
    const roleExists = await Role.findOne({slug})
    if(roleExists){
        res.status(404)
        throw new Error("Role already Exists!!")
    }

    const newRole = await Role.create({
        role,
        slug
    })
    if(newRole) {
        res.status(201).json({
            id: newRole._id,
            role: newRole.role,
            slug: newRole.slug
        })
    }else {
        res.status(400)
        throw new Error("Invalid Role")
    }
})

//@desc delete a user role
//@route /api/userRole/deleteRole
//@access PUBLIC
const deleteUserRole = expressAsyncHandler( async(req,res) => {
    const role = await Role.findOne(req.params.slug)
    if(role) {
        await Role.remove()
        res.json({ message: "User removed" })
    } else {
        res.status(404)
        throw new Error('Role not found')
    }
})

//@desc get all users
//@route /api/userRole/roles
//@access PUBLIC
const getRoles = expressAsyncHandler( async(req,res) => {
    const query = {}
    if(Array.isArray(req.query.excludedRoles)){
        query.slug = {$nin:req.query.excludedRoles}
    }else if(req.query.excludedRoles) {
        query.slug = {$nin:[req.query.excludedRoles]}
    }
    const roles = await Role.find(query)

    res.json(roles)
})

export {createUserRole, deleteUserRole, getRoles}