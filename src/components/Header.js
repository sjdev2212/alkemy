import React from 'react'
import{Link} from 'react-router-dom'
import Buscardor from './Buscador'
const Header = () => {
  return (
<nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" >Navbar</a>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
 
        <li className="nav-item">
          <Link className="nav-link" to='/listado'>Listado</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/'>Home</Link>
        </li>
     
      </ul>
    </div>
  </div>
  <Buscardor/>
</nav>

  )
}

export default Header