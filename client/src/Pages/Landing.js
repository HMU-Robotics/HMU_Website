import React , { Component } from "react"
import Hero from "../components/Hero.js"
import News from "../components/News.js"
import Divider from "../components/Divider.js"
import Spliter from "../components/Spliter.js"

class Landing extends Component{
    render(){
        return(
        <div>
            <Hero/>
            <Divider/>
            <Spliter/>
            <Divider/>
            <News />
        </div>
        )
    }
}

export default Landing