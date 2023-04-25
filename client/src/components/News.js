import React, { useState , useEffect } from "react";
import "./News.css"
import ImageCarousel from "./ImageCarousel";


function News(props){

    const [data , setData] = useState([])

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
    }, [props]);

    return(
        <div className="new-cont">
            <h2 className="new-title">News Feed</h2>
            <ImageCarousel className="news-carousel" category="news" data={data}></ImageCarousel>
        </div>
    )
}


export default News