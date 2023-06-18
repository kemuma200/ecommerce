import React, { Component, useState} from "react"


export default class Mobile extends Component{
    const [number, setNumber] = useState("")

    
    render(){
        const isEnabled = number.length > 0;
    }
    return(
        <form>
            <label>Phone Number</label>
            <input type="number" pattern=[0-9]/>
            <button disabled={!isEnabled}>Submit</button>
        </form>
    )
}