import { error } from 'console';
import { Request, Response } from 'express';

const { hashPassword, comparePassword } = require('../helpers/auth')
const Candidate = require('../models/candidate');

const registerCandidate = async (req: Request, res: Response) =>{
    try {
        const {name, email, phone, address, age, about, experience, formation, curriculum, password} = req.body;
        
        if(!name || !email || !phone || !address || !age || !about || !experience || !formation || !curriculum || !password){
            return res.json({
                error: 'Preencha todos os campos!'
            })
        }
        
        if(password.length < 8){
            return res.json({
                error: 'Sua senha deve ter 8 ou mais caracteres!'
            })
        }

        const exist = await Candidate.findOne(({email}));
        if(exist){
            return res.json({
                error: 'Este email já está em uso!'
            })
        }

        const hashedPassword = await hashPassword(password)

        const candidate = await Candidate.create({
            name, email, phone, address, age, about, experience, formation, curriculum, password: hashedPassword
        });

        return res.json(candidate);
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
            res.json('Password match')
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

module.exports = {
    registerCandidate,
    login
}