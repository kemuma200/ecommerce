import React from "react"
import { NavLink} from "react-router-dom"
import '../css/navbar.css'


export default class Navbar extends React.Component{
    render(){
        return(
            <div className="mainNavbar">
                <div className="left-navbar-section">
                    <NavLink to="/" activeStyle>
                        <h2>Mohito</h2>
                    </NavLink>
                    
                </div>
                <div className="right-navbar-section">
                    <NavLink to="/about" activeStyle className="navItem">
                        About
                    </NavLink>
                    <NavLink to="/contacts" activeStyle className="navItem">
                        Contacts
                    </NavLink>
                    <NavLink to="/meal-box" activeStyle className="navItem">
                        MealBox
                    </NavLink>
                    <NavLink to="/grocery" activeStyle className="navItem">
                        Grocery
                    </NavLink>
                    <NavLink to="/cart" activeStyle className="navItem">
                        Cart
                    </NavLink>
                    
                        </div>
                        
            </div>
        )
    }
}