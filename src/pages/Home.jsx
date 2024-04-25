import {Button} from "@mui/material"
import {Link} from "react-router-dom"
import styles from './home.module.css'


function Home() {


    return (
      <div>
        <div className={styles.fotoTrilha}>
          <div className={styles.apresentacao}>
          <h1>Que tal aproveitar um tempo
          com a natureza?</h1>
          <br/>
          <p> Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras <br></br>e inspire-se com as experiências de outros aventureiros. <br></br>Prepare-se para explorar novos horizontes e se conectar com a natureza <br></br>através do Adventure Trails!</p>
          <br/>
          <Link to="/listaTrilhas"><Button variant="contained" color="success" >Explorar trilhas</Button></Link>
          </div>
       </div>
       <div className="exploreTrilha">
        <h1>Explore trilhas incríveis</h1>
        <p>O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.</p>
       </div>
       <div className={styles.btn}><Link to="/listaTrilhas" ><Button variant="contained" color="success" >Explorar trilhas</Button></Link></div>
       <div className={styles.blocoCadastro}>
        <div className={styles.txtButton}>
          <p className={styles.txt}>Compartilhe fotos, dicas e localização das suas trilhas favoritas</p>
          <Link to="/cadastro" className={styles.btnCadastro}><Button variant="contained" color="success">Cadastrar nova trilha</Button></Link>
        </div>
        <div><img src="https://images.pexels.com/photos/172510/pexels-photo-172510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={617.14} height={330}></img></div>
       </div>
      </div>
    )
  }
  
  export default Home;
  