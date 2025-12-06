import {Router} from "express";
import {Request, Response} from 'express';
import {pool} from "../../database/db";
import {userController} from "./user.controller";

const router = Router();


//language=TEXT
router.post('/', userController.createUser);

export const userRoute = router;