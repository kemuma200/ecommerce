import React from "react"
import Tabs from "./tabs"
import Navbar from "./navbar"

export default class About extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Tabs/>
                <p>About</p>
            
            </div>
        )

    }
   
}