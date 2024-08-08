// src/components/LoginForm.tsx
import React, { useState } from 'react';

import axiosInstance from '../../services/axios';
import toast, { Toaster } from 'react-hot-toast';

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/login', formData);
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                toast.success('Login realizado com sucesso', response.data);
            }
        } catch (error) {
            toast.error('Erro ao logar');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" />
            <button type="submit">Entrar</button>
            <Toaster />
        </form>
    );
};

export default LoginForm;
