import React from "react"
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 



export default class Footer extends React.Component{
    
      render() {
        return (
          <div className="footer">
            <div className="footer-left">
            <FontAwesomeIcon className="footer-left-icon" icon={solid('arrow-right')} />
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
          

        )
       
      }
}