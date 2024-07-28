import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

export const CandidateContext = createContext({});

interface CandidateContextProviderProps {
    children: ReactNode;
}

export function CandidateContextProvider({ children }: CandidateContextProviderProps) {
    const [candidate, setCandidate] = useState(null);
    
    useEffect(() => {
        if (!candidate) {
            axios.get('/candidate').then(({ data }) => {
                setCandidate(data);
            });
        }
    }, []);

    return (
        <CandidateContext.Provider value={{ candidate, setCandidate }}>
            {children}
        </CandidateContext.Provider>
    );
}