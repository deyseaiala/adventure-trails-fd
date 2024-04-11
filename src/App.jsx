import CardTrilha from "./components/CardTrilha"

function App() {

  let listaTrilhas = [{
    nomeTrilha: "Trilha da Costa da Lagoa",
    cidade: "Florianópolis",
    estado: "SC",
    duraçao: 120,
    trajeto: 4,
    dificuldade: "Iniciante",
    tipo: "caminhada/trekking",
    nomeUsuario: "Deyse Aiala",
    urlImagem: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }]
  

  return (
    <>
      {listaTrilhas.map((trilha,index) => (
      <CardTrilha dadosTrilha={trilha} key={index} />  
      ))
      
      } 
    </>
  )
}

export default App
