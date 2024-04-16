
import CardTrilha from "./components/CardTrilha";
import useFetch from "./components/hooks/useFetch";
import {useState, useEffect} from "react";
import { Outlet } from 'react-router-dom'
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import Footer from "./components/footer/Footer";


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
     <HeaderMenu></HeaderMenu>
     <Outlet>
  
      {
        trilhas &&
      trilhas.map((trilha,index) => (
      <CardTrilha dadosTrilha={trilha} key={index} />  
      ))
      
      } 

    </Outlet>
    <Footer></Footer>
  </>
  )
}

export default App
