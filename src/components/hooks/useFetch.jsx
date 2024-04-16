import {useState, useEffect} from 'react'

function useFetch(url){

    const [dados, setDados] = useState([null]);
      
      useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((resposta) => {setDados(resposta) })
        .catch(() => {
            window.alert("Erro ao carregar os dados da trilha.")
        })
        
      }, [url]);
    
      return dados;
    
    }

export default useFetch;