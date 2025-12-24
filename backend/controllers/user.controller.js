import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
    const {username} = req.params;

    const user = await User.findOne({username});

    const {
        hashPassword,
        ...detailsWithoutPassword
    } = user.toObject();

    res.status(200).json(detailsWithoutPassword);
}


export const registerUser = async (req, res) => {
    const {
        username,
        displayName,
        email,
        password
    } = req.body;
    if (!username ||!displayName ||!email || !password)  return res.status(400).json({message: "Please fill all the fields"})
    const newHashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        displayName,
        email,
        hashPassword: newHashedPassword
    });
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET)

    res.cookie(
        'token',
        token,
        {
            httpOnly: true,
            secure:   process.env.NODE_ENV === 'production',
            maxAge:   1000 * 60 * 60 * 24 * 7,
        }
    );
    const {
        hashPassword,
        ...detailsWithoutPassword
    } = user.toObject();
    res.status(201).json(detailsWithoutPassword);
}


export const loginUser = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    if (!email || !password) {
        return res.status(400).json({message: "Please fill all the fields"})
    }
    const user = await User.findOne({email: email});

    if (!user) return res.status(401).json({message: "Invalid email or password"});

    const isPasswordCorrect = await bcrypt.compare(password, user.hashPassword);

    if (!isPasswordCorrect) return res.status(401).json({message: 'Invalid email or password'})

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET)

    res.cookie(
        'token',
        token,
        {
            httpOnly: true,
            secure:   process.env.NODE_ENV === 'production',
            maxAge:   1000 * 60 * 60 * 24 * 7,
        }
    );
    const {
        hashPassword,
        ...detailsWithoutPassword
    } = user.toObject();
    res.status(200).json(detailsWithoutPassword);
}


export const logoutUser = async (req, res) => {
    res.clearCookie('token');

    res.status(200).json({message: "Logged out successfully"});
}