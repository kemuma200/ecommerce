import React from "react"
import '../css/header.css'
import '../css/footer.css'
import '../css/homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import Footer from '../components/footer'
import Header from '../components/header'
import SlideshowImage from '../components/slideshowImage'
import { Link} from "react-router-dom"


export default class Homepage extends React.Component{
    render(){
        return(
            <div className="homepage">
                <div className="mainHeader">
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
                </div>
                <SlideshowImage className="backgroundImage"/>
                <div className="mainFooter">
                <div className="footer">
                <div className="footer-left">
                    <Link to="/meal-box">
                        <FontAwesomeIcon className="footer-left-icon" icon={solid('arrow-right')} />
                    </Link>
                </div>
                
                <div class="socialHandles">
                        <div className="socials">
                        <FontAwesomeIcon className="social-icon" icon={brands('twitter')} />
                        <FontAwesomeIcon className="social-icon" icon={brands('instagram')} />
                        <FontAwesomeIcon className="social-icon" icon={brands('facebook')} />
                        <FontAwesomeIcon className="social-icon" icon={brands('youtube')} />                    
                        </div>
                        <FontAwesomeIcon className="social-icon profile" icon={solid('user-secret')} />
                        
                        
                    </div>
                </div>
                </div>
            </div>
          
        )
    }
}