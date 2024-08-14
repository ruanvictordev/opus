import { AuthDTO } from "../helpers/auth.util";

import { Response } from 'express';
import {  throwAuthResError  } from '../helpers/auth.util';
const { hashPassword} = require('../helpers/auth')
const Candidate = require('../models/candidate');

export async function registerNewCandidate(res: Response, data: AuthDTO){
    if(data.password.length < 8) return throwAuthResError('Sua senha deve ter 8 ou mais caracteres!', res);

    const candidate = await Candidate.findOne((data.email));
    
    if(candidate) return throwAuthResError('Este email já está em uso!', res);

    data.password = await hashPassword(data.password)

    const createdCandidate =  Candidate.create({data});
    return createdCandidate;
}

export async function loginCandidate(res: Response, data: AuthDTO){

}