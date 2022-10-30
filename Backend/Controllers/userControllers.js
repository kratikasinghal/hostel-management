import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken.js";
import mongoose from "mongoose";

//@desc Register a new User
//@route /api/users/register
//@access PUBLIC
const registerUser = expressAsyncHandler( async(req,res) => {
    const {firstName, lastName, email, phoneNumber, address, password} = req.body

    //validate user input
    if(!(firstName && lastName, email, phoneNumber, address, password))
        res.status(400).send("All inputs are required !!");

    const userExists = await User.findOne({email})
    if(!userExists) {
        const encryptedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            password: encryptedPassword,
        })

        if(user) {
            res.status(201).json({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                address: user.address,
                password: user.password,
                token: generateToken(user.email),
                userRole: user.userRole
            })
        }else {
            res.status(400)
            throw new Error("Invalid User Data")
        }
    }else {
        res.status(404)
        throw new Error("User already Exists!!")
    }
})

//@desc Login User
//@route /api/users/login
//@access PUBLIC
const authUser = expressAsyncHandler(async(req,res) => {
    const {email, password} = req.body

    if(!(email && password)) {
        res.status(400)
        throw new Error("All inputs are required")
    }

    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
            password: user.password,
            userRole: user.userRole,
            token: generateToken(user.email)
        })
    }else{
        res.status(401)
        throw new Error('Invalid Email and Password')
    }
})

//@desc get user Profile
//@route /api/users/getProfile
//@access PROTECTED
const getProfile = expressAsyncHandler( async(req,res) => {
    
    const user = await User.findOne({_id:new mongoose.Types.ObjectId(req.params.id)}).populate([{path:"userRoleInfo", select:"name slug"}])

    if(user) {
        res.status(201).json({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            address: user.address,
            userRole: user.userRole,
            userRoleInfo: user.userRoleInfo
        })
    }else{
        res.status(404)
        throw new Error('User not Found')
    }
})

//@desc get users
//@route /api/users/getUsers
//@access PUBLIC
const getUsers = expressAsyncHandler( async(req,res) => {
    try{
        const users = await User.find({}).populate([{path:"userRoleInfo", select:"name slug"}])

        res.json(users)
    }catch(error){
        console.log(error)
    }
})

//@desc Update user profile
//@route /api/users/updateProfile

const updateProfile = expressAsyncHandler(async(req,res)=> {
    const user = await User.findOne({email:req.user.email})

    if (user) {
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        user.address = req.body.address || user.address
        user.phoneNumber = req.body.phoneNumber || user.phoneNumber
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            phoneNumber: updatedUser.phoneNumber,
            address: updatedUser.address,
            password: updatedUser.password,
            userRole: updatedUser.userRole,
            token: generateToken(user.email)
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
})

//@desc Update user role
//@route /api/users/updateUserRole
const updateUserRole = expressAsyncHandler(async(req,res) => {
    const user = await User.findOne({email:req.user.email})
    if(user) {
        user.userRole = req.body.userRole || user.userRole

        const updatedUser = await user.save()
        res.json({
            email: updatedUser.email,
            userRole: updatedUser.userRole
        })
    }else {
        res.status(404)
        throw new Error('User not found')
    }
}) 

export {registerUser, authUser, getProfile, getUsers, updateProfile, updateUserRole}