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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/culture'>Culture</Link></li>
            <li><Link to='/politic'>politics</Link></li>
            <li><Link to='/memes'>memes</Link></li>
            <li><Link to='/sports'>sports</Link></li>
            <li><Link to='/boxed'>boxed</Link></li>
            <li><Link to='/reviwes'>reviews</Link></li>
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