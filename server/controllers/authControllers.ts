import { Request, Response } from 'express';
import { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import { AuthDTO } from '../helpers/auth.util';
const jwt = require('jsonwebtoken');
import { authenticateUser, registerNewCandidate } from '../services/authservice';

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
        jwt.verify(token, process.env.JWT_SECRET as string, {}, (err: VerifyErrors | null, candidate: JwtPayload | string | undefined) => {
            if (err) {
                throw err;
            }
            res.json(candidate);
        });
    } else {
        res.json(null);
    }
}