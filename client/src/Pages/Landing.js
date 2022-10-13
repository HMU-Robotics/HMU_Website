import React , { Component } from "react"
import Hero from "../components/Hero.js"
import News from "../components/News.js"
import Divider from "../components/Divider.js"

class Landing extends Component{
    render(){
        return(
        <div>
            <Hero/>
            <Divider/>
            <News />
            <Divider/>
        </div>
        )
    }
}

export default Landing