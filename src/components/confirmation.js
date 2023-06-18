import React, {Component, useState} from "react"


export default class ConfirmationEmail extends Component{
    constructor(props){
        super(props)
        this.state = {email = "", checked = "null"};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        this.setEmail("")
    }
    handleSubmit(event){
        console.log('An order summary has been sent to that contact')
    }

    render(
        const isEnabled = email.length > 0;
    )
    

    return(
        <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input type="email" />
            <input type="checkbox" id="regular_email"  value="Email" onclick={handleClick(this)}>
            <label for="email-checkbox"> Use regular email</label><br>
            <button disabled={!isEnabled}>Submit</button>
            <a href="#">Skip this step</a>
        </form>
    )
}