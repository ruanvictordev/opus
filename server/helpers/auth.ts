import bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtPayload, VerifyErrors } from 'jsonwebtoken';
const jwt = require('jsonwebtoken');

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

export const comparePassword = (password: string, hashed: string): Promise<boolean> => {
    return bcrypt.compare(password, hashed);
}

export const getUserToken = (token: any, res: Response) => {
    jwt.verify(token, process.env.JWT_SECRET as string, {}, (err: VerifyErrors | null, candidate: JwtPayload | string | undefined) => {
        if (err) throw err
        res.json(candidate);
    });
}