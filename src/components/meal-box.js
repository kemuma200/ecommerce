import React from "react"
import Slideshow from "./slider"
import MealBoxProducts from "./moreproducts"
import Tabs from "./tabs"
import Navbar from "./navbar"
import "../css/mealbox.css"


export default class MealBox extends React.Component{
    render(){
        return(
            <div className="slideShow">
                <Navbar/>
                <Tabs/>
                <div className="meal-box-slideshow">
                    {<Slideshow/>}
                </div>
                <MealBoxProducts/>
            </div>
        )
    }
}