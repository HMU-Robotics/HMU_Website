import React , { Component } from "react"
import Hero from "../components/Hero.js"
import News from "../components/News.js"
import Divider from "../components/Divider.js"
import TimeLine from "../components/TimeLine.js"

class Landing extends Component{
    render(){
        return(
        <div>
            <Hero/>
            <Divider/>
            <News />
            <Divider/>
            <TimeLine/>
        </div>
        )
    }
}

export default Landing