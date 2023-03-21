import React , {useState} from 'react'
import Head from './Head'
import './header.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

const Header = () => {
  const [navbar, setnavbar] = useState(false);
  return (
    <>  
    <Head/>
    <header>
      <div className="container paddingSmall">
        <nav>
          {/* para hacer horizontal la barra de categorias */}
          <ul className={navbar ? 'navbar':'flex'} onClick={()=>setnavbar(false)}>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/publicaciones'>Publicaciones</Link></li>
            <li><Link to='/noticias'>Noticias</Link></li>
            <li><Link to='http://mercadoloreto.great-site.net/home.php?i=2'>Mercado Loreto</Link></li>
            <li><Link to='/eventos'>Eventos</Link></li>
            <li><Link to='/correos_institucionales'>Correos Institucionales</Link></li>
            <li><Link to='/nosotros'>Nosotros</Link></li>
          </ul>
          <button className='barIco' onClick={()=> setnavbar(!navbar)}>
            {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </div> 
    </header>
    </>
  )
}

export default Header