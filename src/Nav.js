import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

 
const Nav=()=>{
    return(
      <div className='nav'>
        
          <Link to="/"><div style={{color:'white',textDecoration:'none'}}>Home</div></Link>
          <ul className='nav-links'>
         <li> <Link to="/about"><div style={{color:'white',textDecoration:'none'}}>About</div></Link></li>
          <li><Link to="/Graph"><div style={{color:'white',textDecoration:'none'}}>Graph</div></Link></li>
          </ul>
      </div>
    )
}
export default Nav;