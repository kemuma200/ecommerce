import React, { Component, useState} from "react"


export default class Mobile extends Component{
    const [email, setEmail] = useState("")

    
    render(){
        const isEnabled = email.length > 0;
    }
    return(
        <form>
            <label>Email Address</label>
            <input type="text" pattern=[^A-Z]/>
            <button disabled={!isEnabled}>Submit</button>
        </form>
    )
}