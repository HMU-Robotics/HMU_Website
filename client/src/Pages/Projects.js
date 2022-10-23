import React , { Component } from "react"
import ImageCarousel from "../components/ImageCarousel"
import "./Projects.css"


class Projects extends Component{
    render(){
        return(
        <div className="project-page">
            <h1 className="project-page-title">Projects Page</h1>
            <ImageCarousel className="project-carousel">Projects</ImageCarousel>
            <div className="divider"/>
            <h1 className="project-page-title">Seminars / Workshops</h1>
            <ImageCarousel className="seminar-carousel">Seminars</ImageCarousel>
        </div>
        )
    }
}

export default Projects