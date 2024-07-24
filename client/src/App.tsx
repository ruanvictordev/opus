import './App.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { CandidateContextProvider } from '../context/candidateContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/RegisterCandidate';
import Login from './pages/Login';
import Candidate from './pages/Candidate';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
    return (
        <CandidateContextProvider>
            <Navbar />
            <Toaster position='top-center' toastOptions={{ duration: 2000 }} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/candidate' element={<Candidate />} />
            </Routes>
        </CandidateContextProvider>
    );
}

export default App;