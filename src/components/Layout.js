import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Outlet, Link } from 'react-router-dom';

function Layout(){

    return(  
<>

<header>
<div className="HeadElement">
    <div className='d-flex IndianRed py-3 justify-content-between align-items-center'>
     <h1 className='text-white px-3'>WebDev</h1>
            
        <nav className='px-2'>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home" style={{ color: 'whitesmoke' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'whitesmoke' }}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'whitesmoke' }}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'whitesmoke' }}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'whitesmoke' }}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'whitesmoke' }}>Contact</Link>
            </li>
            </ul>
            </nav>

    </div>
</div>    
</header>
<main><Outlet/></main>     
</>
    );
}

export default Layout;