import React from "react"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

export default class FontAwesome extends React.Component{
    constructor(props){
        props.class
        props.data
    }
    
    render(){
        return(
            <div>
                <FontAwesomeIcon icon={[props.class, props.data]}/>
            </div>
        )
    }
}
