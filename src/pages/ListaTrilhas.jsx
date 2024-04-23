import CardTrilha from "../components/CardTrilha/index.jsx";
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext.jsx";


function ListaTrilhas() {
  
  const {trilhas} = useContext(TrilhasContext)
  
return (
      <div>
        <div><img src="https://images.pexels.com/photos/2132087/pexels-photo-2132087.jpeg" alt="Trilha com montanhas" width="1440px" height="453px"></img></div>

        <div>
          <h1>Explore trilhas incríveis</h1>

          {!!trilhas && trilhas.map((trilha,index) => (
      <CardTrilha dadosTrilha={trilha} key={index} />  
      ))
      } 
          
        </div>
      </div>
    )
  }
  
  export default ListaTrilhas;