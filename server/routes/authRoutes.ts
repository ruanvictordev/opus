const express = require('express');
import cors from 'cors';
const {registerCandidate, login, getCandidate} = require('../controllers/authControllers');

const router = express.Router();

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.post('/register', registerCandidate)
router.post('/login', login)
router.get('/candidate', getCandidate)

module.exports = router
