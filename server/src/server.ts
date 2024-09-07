import express, {Request, Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});