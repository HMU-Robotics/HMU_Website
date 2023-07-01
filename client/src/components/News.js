import React, { useState , useEffect } from "react";
import "./News.css"
import ImageCarousel from "./ImageCarousel";


function News(props){

    const [data , setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://robotics-club.hmu.gr:443/api/posts/find/latest`, {})
    //     .then((res) => res.json())
    //     .then((response) => {
    //       setData(response)
    //       console.log(`https://robotics-club.hmu.gr:443/api/posts/find/latest`);
    //       console.log(response)
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //   })
    // }, [props]);


    // Changes of News to show all projects and seminars in carousel instead of news


    // fetches simultaneously both projects and seminars , concats into data for it to be iterated in carousel
    useEffect(() => {
      Promise.all([
        fetch(`https://robotics-club.hmu.gr:443/api/posts/find/projects`),
        fetch(`https://robotics-club.hmu.gr:443/api/posts/find/seminars`)
      ])
        .then(([projectsResponse, seminarsResponse]) =>
          Promise.all([projectsResponse.json(), seminarsResponse.json()])
        )
        .then(([projectsData, seminarsData]) => {
          const combinedData = projectsData.concat(seminarsData);
          setData(combinedData);
          console.log(`https://robotics-club.hmu.gr:443/api/posts/find/projects`);
          console.log(`https://robotics-club.hmu.gr:443/api/posts/find/seminars`);
          console.log(combinedData);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [props]);


    return(
        <div className="new-cont">
            <h2 className="new-title">Activities</h2>
            <ImageCarousel className="news-carousel" category="news" data={data}></ImageCarousel>
        </div>
    )
}


export default News