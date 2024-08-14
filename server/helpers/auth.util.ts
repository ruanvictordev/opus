import { Request, Response } from 'express';

export interface AuthDTO{
    name: string,
    email: string,
    phone: string,
    address: string,
    age: number,
    about: string,
    experience: string,
    formation: string,
    curriculum: string,
    password: string
}

export function isAuthValidate(body: AuthDTO):boolean{
    if(!body.name || !body.email || !body.phone || !body.address || !body.age || !body.about || !body.experience || !body.formation || !body.curriculum || !body.password){
        return false;
    }
    return true;
}

export function throwAuthResError (message: string, res: Response){
    return res.json({
        error: message
    })
}