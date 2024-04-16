import {Button} from "@mui/material"


function Home() {


    return (
      <div>
        <div className="fundoImagem">
          <h1>Que tal aproveitar um tempo
          com a natureza?</h1>
          <br/>
          <p>Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!</p>
          <br/>
          <Button variant="contained">Explorar trilhas</Button>
       </div>
       <div className="exploreTrilha">
        <h1>Explore trilhas incríveis</h1>
        <p>O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.</p>
       </div>
       <div>
        <div>
          <p>Compartilhe fotos, dicas e localização das suas trilhas favoritas</p>
          <Button variant="contained">Cadastrar nova trilha</Button>
        </div>
        <div><img src="https://images.pexels.com/photos/172510/pexels-photo-172510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img></div>
       </div>
      </div>
    )
  }
  
  export default Home;
  