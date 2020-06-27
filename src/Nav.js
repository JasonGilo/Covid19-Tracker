import React from 'react';
import {Link } from "react-router-dom";
import virus from './virus.png'
function Nav() {


  return (
    <header style={{backgroundColor:'#302c2c', color:'white'}}>
    <div style={{display:'flex', alignSelf:'flex-end'}}>
    <img src={virus} alt="Coronavirus Microscopic"/>
    <Link exact to='/'><h1>Coronavirus Tracker</h1></Link>
    </div>
      <ul>
      <li><Link to='/USA' >USA</Link></li>
      <li><Link to='/Learn' >Learn & Prevent Coronavirus</Link></li>
    </ul>
    </header>
  )

}

export default Nav;
