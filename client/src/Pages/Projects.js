import React , { Component } from "react"
import ImageCarousel from "../components/ImageCarousel"
import "./Projects.css"


class Projects extends Component{
    render(){
        return(
        <div>
            <h1 className="title">Projects Page</h1>
            <ImageCarousel cardCat="Project"/>
            <div className="divider"/>
            <h1 className="title">Seminars / Workshops</h1>
            <ImageCarousel cardCat="Project"/>
        </div>
        )
    }
}

export default Projects