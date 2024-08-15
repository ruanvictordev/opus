import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
const Candidate = require("../models/candidate");

// Função para hash de senha
export const hashPassword = (password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err: Error | undefined, salt: string) => {
            if (err) {
                reject(err);
                return;
            }
            bcrypt.hash(password, salt, (err: Error | undefined, hash: string) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(hash);
            });
        });
    });
}

// Função para comparar senhas
export const comparePassword = (password: string, hashed: string): Promise<boolean> => {
    return bcrypt.compare(password, hashed);
}

// Função para obter o usuário do token
export const getUserToken = async (token: string, res: Response) => {
    if (!token) {
        return res.status(401).json({ message: 'Não autorizado' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        const candidate = await Candidate.findById(decoded.id);

        if (candidate) {
            return res.json(candidate);
        } else {
            return res.status(404).json({ message: 'Candidato não encontrado' });
        }
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido ou expirado' });
    }
}

// Função middleware para autenticar o token
export const authenticateToken = (req: Request & { user?: JwtPayload }, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Não autorizado' });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: JwtPayload | undefined) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });

        req.user = user;
        next();
    });
};
