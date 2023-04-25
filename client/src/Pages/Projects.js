import React , { Component, useState, useEffect } from "react"
import ImageCarousel from "../components/ImageCarousel"
import "./Projects.css"
import Divider from "../components/Divider"


function Projects(){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/posts/find/latest`, {})
        .then((res) => res.json())
        .then((response) => {
          setData(response)
          console.log(`https://robotics-club.hmu.gr:443/api/posts/find/latest`);
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
      })
    }, []);


    return (
        <div className="project-page">
          <div className="project-cont">
            <h1 className="project-page-title">Projects Page</h1>
            {console.log(data)}
            {console.log(data.Item)}
            {console.log(data.length)}
            {data.length > 0 && (
              <ImageCarousel className="project-carousel" category="projects" data={data} />
            )}
          </div>
          <Divider />
          <div className="seminars-cont">
            <h1 className="project-page-title">Seminars / Workshops</h1>
            {console.log(data)}
            {data.length > 0 && (
              <ImageCarousel className="seminar-carousel" category="seminars" data={data} />
            )}
          </div>
        </div>
      );
}

export default Projects