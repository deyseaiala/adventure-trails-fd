import {Link} from 'react-router-dom';

function HeaderMenu() {


    return (
      <div>
       <nav>
        <Link to="/">Adventure Trails FD</Link>
        <Link to="/listaTrilhas">Explorar Trilhas</Link>
        <Link to="/cadastro">Cadastrar Trilhas</Link>
       </nav>
      </div>
    )
  }
  
  export default HeaderMenu;
  