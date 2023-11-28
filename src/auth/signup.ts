import { Request, Response } from "express";
import { JwtHelper } from "../utils/token/users.token.js";
import { hashedHelper } from "../utils/hashedPassword/password.hashed.js";

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
    const { username, password } = req.body
    const createToken = {
        username,
        isAdmin: false
    }
    const token = JwtHelper.sign(createToken)
    const passworhash = await hashedHelper.hash(password)
    const data = {
        username,
        passworhash,
        token
    }
    res.status(201).json(data)
    } catch (error: any) {
        console.error(error.message);
        process.exit(-1)
    }
};
  
