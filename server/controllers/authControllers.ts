import { Request, Response } from 'express';
import { AuthDTO } from '../helpers/auth.util';
import { authenticateUser, registerNewCandidate } from '../services/authservice';
import { getUserToken } from '../helpers/auth';

export const registerCandidate = async (req: Request, res: Response) =>{
    try {
        const data: AuthDTO = req.body
        
        const createdCandidate = await registerNewCandidate(res, data);

        return res.json(createdCandidate);
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req: Request, res: Response) =>{
    try {
        const data: AuthDTO = req.body

        await authenticateUser(res, data);
    } catch (error) {
        console.log(error)
    }
}

export const getCandidate = async (req: Request, res: Response) => {
    const { token } = req.cookies;
    if (token) {
        await getUserToken(token, res);
    } else {
        res.json(null);
    }
}