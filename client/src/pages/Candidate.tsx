import React, { useContext } from 'react';
import { CandidateContext } from '../../context/candidateContext';

interface Candidate {
    name: string;
    // Adicione outras propriedades que seu candidato possa ter
}

interface CandidateContextType {
    candidate: Candidate | null;
    setCandidate: React.Dispatch<React.SetStateAction<Candidate | null>>;
}

export default function Candidate() {
    const context = useContext(CandidateContext) as CandidateContextType;

    if (!context.candidate) {
        return <div>Carregando...</div>;
    }

    const { candidate } = context;

    return (
        <div>
            <h1>Perfil</h1>
            {!!candidate && (<h2>Olá, {candidate.name}!</h2>)}
        </div>
    );
}
