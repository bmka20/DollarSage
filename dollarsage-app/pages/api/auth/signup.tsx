import { connectToMongoDB } from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcryptjs";
import User from "../../../models/user"
import mongoose from "mongoose";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToMongoDB().catch(err => res.json(err))

    if (req.method === "POST") {
        if (!req.body) return res.status(400).json({ error: "Data is missing" })

        const { fullName, email, password } = req.body

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(409).json({ error: "User Already exists" })
        }
        else {
            if (password.length < 6)
                return res.status(409).json({ error: "Password should be 6 characters long" })

            try {
                const hashedPassword = await hash(password, 12)

                const user = new User({
                    fullName,
                    email,
                    password: hashedPassword
                })

                const savedUser = await user.save()

                const newUser = {
                    email: savedUser.email,
                    fullName: savedUser.fullName,
                    _id: savedUser._id
                }

                return res.status(201).json({
                    success: true,
                    user: newUser
                })
            } catch (error) {
                if (error instanceof mongoose.Error.ValidationError) {

                    for (let field in error.errors) {
                        const msg = error.errors[field].message
                        return res.status(409).json({ error: msg })
                    }
                } else {
                    console.error(error)
                    return res.status(500).json({ error: "Server Error" })
                }
            }
        }
    }
    else {
        res.status(405).json({ error: "Method Not Allowed" })
    }
}

export default handler