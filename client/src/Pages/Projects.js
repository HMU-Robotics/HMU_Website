import React , { Component } from "react"
import ImageCarousel from "../components/ImageCarousel"
import "./Projects.css"


class Projects extends Component{
    render(){
        return(
        <div>
            <h1>Projects Page</h1>
            <ImageCarousel/>
            <div className="divider"/>
            <h1>Seminars / Workshops</h1>
            <ImageCarousel/>
        </div>
        )
    }
}

export default Projects