import { AuthDTO, isAuthValidate } from "../helpers/auth.util";
import { Response } from "express";
import { throwAuthResError } from "../helpers/auth.util";
import { comparePassword } from "../helpers/auth";
const { hashPassword } = require("../helpers/auth");
const Candidate = require("../models/candidate");
const jwt = require('jsonwebtoken');

export async function registerNewCandidate(res: Response, data: AuthDTO) {
  if (!isAuthValidate(data))
    return throwAuthResError("Preencha todos os campos!", res);
  if (data.password.length < 8)
    return throwAuthResError("Sua senha deve ter 8 ou mais caracteres!", res);

  if (await Candidate.exists({ email: data.email })) {
    return throwAuthResError("Usuário já Cadastrado", res);
  }  

  data.password = await hashPassword(data.password);
  const createdCandidate = await Candidate.create(data);

  return createdCandidate;
}

export async function authenticateUser(res: Response, data: AuthDTO) {
  const candidate = await Candidate.findOne({ email: data.email });

  if (!candidate) return throwAuthResError("Usuário não Encontrado", res);

  const match = await comparePassword(data.password, candidate.password);
  if (match) {
    jwt.sign(
      { email: candidate.email, id: candidate._id, name: candidate.name },
      process.env.JWT_SECRET as string,
      {},
      (err: Error | null, token: string | undefined) => {
        if (err) throw err;
        res.cookie("token", token).json(candidate);
      }
    );
  }
  if (!match) throwAuthResError("Email ou Senha Incorretos!", res);
}
