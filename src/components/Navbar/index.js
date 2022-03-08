import React from "react"
import "./navbar.scss"


export const Navbar= (props) => {
  return (
  <nav className="navbar">
      <div className="navbar__container">
        <a href='/' className="navbar__logo">romper</a>
        <div className="navbar__menu"> MENU</div>  
      </div>  
  </nav>
  )
}
