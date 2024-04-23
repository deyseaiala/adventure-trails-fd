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

        function cadastrarNovaTrilha(dadosCadastro) {
            setTrilhas ((trilha) => [...trilha, dadosCadastro])
        }
    

    return (
        <TrilhasContext.Provider value={{trilhas, setTrilhas, cadastrarNovaTrilha}}>
            {children}
        </TrilhasContext.Provider>

    )

    }

    
