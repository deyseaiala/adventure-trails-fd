import {Link} from 'react-router-dom';

function Footer() {


    return (
      <div>
       <nav>
        <Link to="/">Adventure Trails FD</Link>
       </nav>
       <nav>
        <a href='https://github.com/deyseaiala'>Github</a>
        <a href='https://linkedin.com'>Linkedin</a>
        <a href='https://instagram.com'>Instagram</a>
       </nav>
      </div>
    )
  }
  
  export default Footer;