// src/components/RegisterForm.tsx
import React, { useState } from 'react';

import axiosInstance from '../../services/axios';
import toast, { Toaster } from 'react-hot-toast';

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        age: '',
        about: '',
        experience: '',
        formation: '',
        curriculum: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/register', formData);
            if (response.data.error) {
                toast.error("Usuario ja Cadastrado");
            } else {
                toast.success('Registro realizado com sucesso', response.data);
            }
        } catch (error) {
            toast.error('Erro ao registrar');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefone" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Endereço" />
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Idade" />
            <input type="text" name="about" value={formData.about} onChange={handleChange} placeholder="Sobre você" />
            <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experiência" />
            <input type="text" name="formation" value={formData.formation} onChange={handleChange} placeholder="Formação" />
            <input type="text" name="curriculum" value={formData.curriculum} onChange={handleChange} placeholder="Currículo" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" />
            <button type="submit">Registrar</button>
            <Toaster />
        </form>
    );
};

export default RegisterForm;
