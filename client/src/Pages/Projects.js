import React , { useState, useEffect } from "react"
import ImageCarousel from "../components/ImageCarousel"
import "./Projects.css"
import Divider from "../components/Divider"


function Projects(){

    const [projectData, setProjectData] = useState([])
    const [seminarData, setSeminarData] = useState([])

    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/posts/find/projects`, {})
        .then((res) => res.json())
        .then((response) => {
          setProjectData(response)
          console.log(`https://robotics-club.hmu.gr:443/api/posts/find/projects`);
          console.log(response)
        })
        .catch((error) => {
          console.log(error);
      })
    }, []);

    useEffect(() => {
      fetch(`https://robotics-club.hmu.gr:443/api/posts/find/seminars`, {})
      .then((res) => res.json())
      .then((response) => {
        setSeminarData(response)
        console.log(`https://robotics-club.hmu.gr:443/api/posts/find/seminars`);
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
            {console.log(projectData)}
            {console.log(projectData.Item)}
            {console.log(projectData?.Item?.length)}
            {projectData?.Item?.length > 0 && (
              <ImageCarousel className="project-carousel" category="projects" data={projectData} />
            )}
          </div>
          <Divider />
          <div className="seminars-cont">
            <h1 className="project-page-title">Seminars / Workshops</h1>
            {console.log(seminarData)}
            {seminarData?.Item?.length > 0 && (
              <ImageCarousel className="seminar-carousel" category="seminars" data={seminarData} />
            )}
          </div>
        </div>
      );
}

export default Projects