// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosInstance from '../services/axios'; // Certifique-se de que o caminho está correto

const ProtectedRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // Adiciona um estado para o carregamento

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axiosInstance.get('/candidate'); // Verifica a autenticação
                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            } finally {
                setLoading(false); // Marca o carregamento como completo
            }
        };
        checkAuth();
    }, []);

    if (loading) return <p>Carregando...</p>; // Mostra um estado de carregamento
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
