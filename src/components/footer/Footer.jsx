import {Link} from 'react-router-dom';
import styles from './footer.module.css';
import iconeGit from '../../assets/github-logo-24.png'
import iconeLinkedin from '../../assets/instagram-logo-24.png'
import iconeInstagram from '../../assets/linkedin-logo-24.png'

function Footer() {


    return (
      <div className={styles.rodape}>
       <nav>
        <Link to="/" className={styles.rodapeItens}>Adventure Trails FD</Link>
       </nav>
       <nav>
       <a href='https://github.com/deyseaiala' className={styles.rodapeItens}> <img src={iconeGit} alt='Ícone go github'></img></a>
       <a href='https://linkedin.com' className={styles.rodapeItens}> <img src={iconeLinkedin} alt='Ícone go github'></img> </a>
       <a href='https://instagram.com'className={styles.rodapeItens} > <img src={iconeInstagram} alt='Ícone go github'></img> </a>
       </nav>
      </div>
    )
  }
  
  export default Footer;