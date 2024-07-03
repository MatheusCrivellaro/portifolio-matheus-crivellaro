import {createContext, ReactNode, useState} from "react";

type Tema = "escuro" | "claro";

interface TemaNavContext {
    tema: Tema,
    alternarTema: () => void,
    temaAlter: (newTema: Tema) => void
}

export const TemaNavContext = createContext<TemaNavContext | null>(null);

interface TemaProviderProps {
    children: ReactNode;
}

export const TemaNavProvider = ({children}: TemaProviderProps) => {
    const [tema, setTema] = useState<Tema>("claro");

    const alternarTema = () => {
        setTema(
            (temaAtual) => (temaAtual === "claro" ? "escuro" : "claro")
        );
    }

    const temaAlter = (newTema: Tema) => {
        setTema(newTema)
    }

    return (
        <TemaNavContext.Provider value={{ tema, alternarTema, temaAlter }}>
            {children}
        </TemaNavContext.Provider>
    )
}