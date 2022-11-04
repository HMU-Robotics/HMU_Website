import React , { Component } from "react"
import Hero from "../components/Hero.js"
import News from "../components/News.js"
import Divider from "../components/Divider.js"
import TimeLine from "../components/TimeLine.js"
import About from "../components/About.js"
import SmallSup from "../components/SmallSup.js"
import './Landing.css'

class Landing extends Component{
    render(){
        return(
        <div className="landing">
            <Hero/>
            <Divider/>
            <News />
            <Divider/>
            <About />
            <Divider/>
            <SmallSup/>
            <Divider/>
            <TimeLine/>
        </div>
        )
    }
}

export default Landing