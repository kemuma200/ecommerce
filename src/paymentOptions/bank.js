import React from "react"
import "../css/paymentOptions.css"


export default class PaymentOptions extends Component{
    constructor(props){
        super(props)
        this.state = {bin: "", accountNumber= "", accountName=""}
    }
    render(){
        const isEnabled = bin.length > 0 && accountNumber.length > 0 && accountName.length > 0;   
    }
    return(
        <form>
            <label>BIN</label>
            <input type="number"/>
            <label>Account Number</label>
            <input type="text" pattern=[A-Z0-9]/>
            <label>Account Name</label>
            <input type="text"/>
            <button disabled={!isEnabled}>Submit</button>
        </form>
    )
}