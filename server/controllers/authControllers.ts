import { error } from 'console';
import { Request, Response } from 'express';
import { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import { isAuthValidate, AuthDTO, throwAuthResError  } from '../helpers/auth.util';
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../helpers/auth')
const Candidate = require('../models/candidate');
import { registerNewCandidate } from '../services/authservice';

const registerCandidate = async (req: Request, res: Response) =>{
    try {
        const data: AuthDTO = req.body
        if(!isAuthValidate(data)) return throwAuthResError('Preencha todos os campos!', res);
        
        const createdCandidate = await registerNewCandidate(res, data);

        return createdCandidate;
    } catch (error) {
        console.log(error);
    }
}

const login = async (req: Request, res: Response) =>{
    try {
        const {email, password} = req.body;

        const candidate = await Candidate.findOne({email});
        if(!candidate) {
            return res.json({
                error: 'Usuário não encontrado!'
            })
        }

        const match = await comparePassword(password, candidate.password)
        if(match){
            jwt.sign(
                { email: candidate.email, id: candidate._id, name: candidate.name },
                process.env.JWT_SECRET as string, {},
                (err: Error | null, token: string | undefined) => {
                    if (err) throw err;
                    res.cookie('token', token).json(candidate);
                }
            );
        }
        if(!match){
            res.json({
                error: 'Email ou Senha Incorretos!'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getCandidate = async (req: Request, res: Response) => {
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


module.exports = {
    registerCandidate,
    login,
    getCandidate
}

function throwAuthError(arg0: string, res: Response<any, Record<string, any>>) {
    throw new Error('Function not implemented.');
}
function isValidate(data: AuthDTO) {
    throw new Error('Function not implemented.');
}

