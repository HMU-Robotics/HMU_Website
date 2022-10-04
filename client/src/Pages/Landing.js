import React , { Component } from "react"
import Hero from "../components/Hero.js"
import News from "../components/News.js"

class Landing extends Component{
    render(){
        return(
        <div>
            <Hero/>
            <News />
        </div>
        )
    }
}

export default Landing