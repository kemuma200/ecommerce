import React from "react"
import {Link} from 'react-router-dom'


export default function NotFoundError(){
    return(
        <div>
            <h2> Oops, we seem not to find the page.</h2>
            <Link to='/'>Back to homepage</Link>
        </div>
    )
}