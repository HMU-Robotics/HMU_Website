import React , { Component, useState } from "react"
import ImageCarousel from "../components/ImageCarousel"
import "./Projects.css"
import Divider from "../components/Divider"


function Projects(props){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/posts/find/latest`, {})
        .then((res) => res.json())
        .then((response) => {
          setIsLoading(false);
          setData(response)
          console.log(`https://robotics-club.hmu.gr:443/api/posts/find/latest`);
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(true);
      })
    }, [props]);

    return(
    <div className="project-page">
        <div className="project-cont">
            <h1 className="project-page-title">Projects Page</h1>
            <ImageCarousel className="project-carousel" category="projects">{data}</ImageCarousel>
        </div>
        <Divider/>
        <div className="seminars-cont">
            <h1 className="project-page-title">Seminars / Workshops</h1>
            <ImageCarousel className="seminar-carousel" category="seminars">{data}</ImageCarousel>
        </div>
    </div>
    )
}

export default Projects