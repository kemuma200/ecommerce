import React from "react"
import "../css/header.css"


export default class Header extends React.Component{
    
    render(){
        return(
            <div className="landingHeader">
                <p className="App-title">Yummart</p>
                <div className="App-menu">
                    <div className="book">
                        <span className="page turn"></span>
                        <span className="page turn"></span>
                        <span className="page turn"></span>
                        <span className="page turn"></span>
                        <span className="page turn"></span>
                        <span className="page turn"></span>
                        <span className="page"></span>
                    </div>
                </div>
            </div>

        )
    }
}