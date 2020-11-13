import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

 
const Nav=()=>{
    return(
      <div className='nav'>
        
          <Link to="/"><div style={{color:'white',textDecoration:'none'}}>Home</div></Link>
          <ul className='nav-links'>
          <Link to="/about"><div style={{color:'white',textDecoration:'none'}}>About</div></Link>
          <Link to="/Graph"><div style={{color:'white',textDecoration:'none'}}>Graph</div></Link>
          </ul>
      </div>
    )
}
export default Nav;