import {NextFunction, Request, Response } from 'express';

const verify = (req:Request, res:Response, next:NextFunction) => {
    console.log("vai wait id anchen")
    const id = false;
    if(!id){}
    throw new Error("Not allowed")
    next();
}

export  default verify;
