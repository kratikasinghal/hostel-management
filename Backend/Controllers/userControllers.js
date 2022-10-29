import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken.js";

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

export {registerUser}