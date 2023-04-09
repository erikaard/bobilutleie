import React from "react";
import './Navbar.css'
import ArrowDownSVG from "./ArrowDownSVG";
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
    return (
      <>
      <header id="home">

      <nav id="nav-wrap" className="shadow-lg backdrop-blur-sm" style={{display:'flex', justifyContent:'center'}}>
        
          <ul id="nav" className="nav">
              <Scrollspy items={['home', 'about', 'kalender', 'terms', 'kontakt']} currentClassName="active">
                <li><a className="smoothscroll" id="navItem" href="#home">Hjem</a></li>
                <li><a className="smoothscroll" id="navItem" href="#about">Om bobilen</a></li>
                <li><a className="smoothscroll" id="navItem" href="#kalender">Tilgjengelighet</a></li>
                <li><a className="smoothscroll" id="navItem" href="#terms">Vilkår</a></li>
                <li><a className="smoothscroll" id="navItem" href="#kontakt">Kontakt</a></li>
              </Scrollspy>
          </ul>
         

      </nav>

      <div className="row banner "> 
         <div className="banner-text">
            <h1 className="responsive-headline">Frankia Platin I7900 GD</h1>
            <h3 style={{marginTop:'50px'}}>Bobil til leie i Sandnes</h3>
         </div>
      </div> 
    
   </header>

   
   </>
    )
}

export default Navbar

//shadow-lg backdrop-blur-sm


//className="current"