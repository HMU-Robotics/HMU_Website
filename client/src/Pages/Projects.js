import React , { Component } from "react"
import ImageCarousel from "../components/ImageCarousel"
import "./Projects.css"
import Divider from "../components/Divider"


class Projects extends Component{
    render(){
        return(
        <div className="project-page">
            <div className="project-cont">
                <h1 className="project-page-title">Projects Page</h1>
                <ImageCarousel className="project-carousel">Projects</ImageCarousel>
            </div>
            <Divider/>
            <div className="seminars-cont">
                <h1 className="project-page-title">Seminars / Workshops</h1>
                <ImageCarousel className="seminar-carousel">Seminars</ImageCarousel>
            </div>
        </div>
        )
    }
}

export default Projects