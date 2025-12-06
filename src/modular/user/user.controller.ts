import {Request, Response} from "express";
import {pool} from "../../database/db";
import {userServices} from "./user.services";


const createUser = async (req: Request, res: Response) => {
    try {

        const result = await userServices.createUserIntoDb(req.body);

        return res.status(201).json({
            message: 'User created successfully',
            data: result.rows[0],
        });
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const userController = {
    createUser
}