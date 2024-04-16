
import CardTrilha from "./components/CardTrilha"
import useFetch from "./components/hooks/useFetch";
import {useState, useEffect} from "react"


function App() {
  const apiTrilhas = useFetch("/dadosTrilha.json");
  const [trilhas, setTrilhas] = useState([]);


  useEffect(() => {
    if (!!apiTrilhas) {
      setTrilhas(apiTrilhas.trilhas);
    }
  }, [apiTrilhas]);
  

  return (
    <>
      
      {
        trilhas &&
      trilhas.map((trilha,index) => (
      <CardTrilha dadosTrilha={trilha} key={index} />  
      ))
      
      } 
      
    </>
  )
}

export default App
