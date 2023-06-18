import React from "react"
import { Person2, LibraryAdd, Settings, Bookmark, SaveAlt,Reviews, History, Portrait, AccountCircle } from '@mui/icons-material';
import "../css/account.css"
export default class Account extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date().getDate}
    }
    render(){
        return(
            <div classname="account-container">
                <div className="account-image-section">
                    <img></img>
                    <div>
                        <p>Username : {this.state.date}</p>
                        <p>Email : </p>
                    </div>
                </div>
                <div className="account-content-section">
                    <section className="saved-items">
                        <svg data-testid="BookmarkIcon"></svg>
                    Saved Items
                    </section>
                    <section className="cart-history">
                        <svg data-testid="SaveAltIcon"></svg>
                        Cart History
                    </section>
                    <section className="account-settings">
                        <svg data-testid="SettingsIcon"></svg>
                        Account Settings
                    </section>
                </div>
            </div>
        )

    }
    
}