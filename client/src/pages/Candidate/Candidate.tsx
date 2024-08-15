// src/components/Candidate.tsx
import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axios'; // Importar axiosInstance

interface CandidateType {
    age: number;
    email: string;
    // Adicione outras propriedades do candidato aqui, se necessário
}

const Candidate = () => {
    const [candidate, setCandidate] = useState<CandidateType | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCandidate = async () => {
            try {
                const response = await axiosInstance.get('/candidate'); // Usar axiosInstance
                setCandidate(response.data);
            } catch (error) {
                console.error('Erro ao buscar candidato', error);
                setError('Não foi possível carregar os dados do candidato.');
            }
        };
        fetchCandidate();
    }, []);

    if (error) return <p>{error}</p>; // Mostrar mensagem de erro
    if (!candidate) return <p>Carregando...</p>; // Mostrar mensagem de carregamento

    return (
        <div>
            <h1>Bem-vindo, {candidate.email}, {candidate.age}</h1>
            {/* Adicione mais informações do candidato aqui */}
        </div>
    );
};

export default Candidate;
