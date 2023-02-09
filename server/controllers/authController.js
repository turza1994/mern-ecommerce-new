import User from "../models/userModel.js"
// import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

// @desc    Register a new user
// @route   POST /api/users/auth/register
// @access  Public
const registerUser = async (req, res)=>{
    const {name, email, password, isAdmin} = req.body;

    if(!isAdmin){
        const user = new User(
            {
                name,
                email,
                isAdmin,
                password
            }
        )
        try{
            const newUser = await user.save()
            res.status(201).json(newUser)
        }catch(err){
            res.status(500).json(err);
        }
        
    }else{
        res.json(
            {
                message: "currently logic is not written"
            }
        )
    }
}

// @desc    User Login
// @route   POST /api/users/auth/login
// @access  Public
const loginUser = async (req, res)=>{
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong username!");

        user.password !== req.body.password && res.status(401).json("Wrong password!");

        const { password, ...others } = user._doc;
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            {expiresIn:"1d"}
        );
        res.status(200).json(
            {
                ...others,
                accessToken
            }
        );
    }catch(err){
        res.status(500).json(err.message);
    }
}

export {
    registerUser, loginUser
}