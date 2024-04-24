import {Link} from 'react-router-dom';
import styles from './headerMenu.module.css';

function HeaderMenu() {


    return (
      <div>
       <nav className={styles.navbar}>
        <div>
        <Link to="/" className={styles.link}>Adventure Trails FD</Link>
        </div>
        <div>
        <Link to="/listaTrilhas" className={styles.link}>Explorar Trilhas</Link>
        <Link to="/cadastro" className={styles.link}>Cadastrar Trilhas</Link>
        </div>
       </nav>
      </div>
    )
  }
  
  export default HeaderMenu;
  