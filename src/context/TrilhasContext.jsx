import { createContext, useState, useEffect } from 'react';
import useFetch from "../components/hooks/useFetch.jsx";


    export const TrilhasContext = createContext()

    export const TrilhasContextProvider = ({ children }) => {

        const dados = useFetch("/dadosTrilha.json");
        const [trilhas, setTrilhas] = useState([]);

        useEffect(() => {
            if (!!dados) {
                setTrilhas(dados.trilhas);
            }
        }, [dados]);
    

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas}}>
            {children}
        </TrilhasContext.Provider>

    )

    }

    
