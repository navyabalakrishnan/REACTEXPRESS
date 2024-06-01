import React from 'react';
import '../App.css';

function Navbar() {
  return (
    // <div className=" navigation-wrap nav-container start-header start-style background_clr " >
    <div className="  start-header start-style background_clr className='app-container navbar-fixed '" >
      <div className="nav-container navbar-brand">


        <h1 style={{
          color: "#000000",
          fontWeight: 500,
          fontFamily: "Poppins, sans-serif",

        }}>
          CompanyX
        </h1>

        <div className="parent-container">
          <ul className="navbaralign navfontstyle" >
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
          </ul></div>
      </div>
    </div>




  );
}

export default Navbar;
