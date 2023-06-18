import React from "react"
import Tabs from "./tabs"
import Navbar from "./navbar"
import Home from "./products"
import "../css/grocery.css"

export default class Grocery extends React.Component{
    render(){
        return(
            <div className="grocerySection">
                <Navbar/>
                <Home/>
            
            </div>
        )

    }
    
}