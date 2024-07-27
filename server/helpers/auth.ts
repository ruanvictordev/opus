import bcrypt from 'bcrypt';

const hashPassword = (password: string): Promise<string> => {
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

const comparePassword = (password: string, hashed: string): Promise<boolean> => {
    return bcrypt.compare(password, hashed);
}

export {
    hashPassword,
    comparePassword
}
