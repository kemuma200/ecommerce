import React from "react"


export default class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = props
    }
        
    render(){
        return(
            <div className="sidebar-container">
            <ul>
            {
                Object.keys(this.state).map((key, index)=>{
                    return(
                        <li className="sidebar-item"> {this.state[index]}</li>
                    )
                })
            }
            </ul>
                
            </div>
        )

    }
   
}