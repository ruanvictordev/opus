const express = require('express');
const dotenv = require('dotenv').config();
import cors from 'cors';
const mongoose = require('mongoose');

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Conected Sucessfully'))
.catch((err: Error) => console.log('Database not Connected', err))

app.use(express.json())

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server is running at the port: ${port}`));
