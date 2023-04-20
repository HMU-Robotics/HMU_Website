import React, { useState , useEffect } from "react";
import "./News.css"
import ImageCarousel from "./ImageCarousel";


function News(){

    const [data , setData] = useState([])

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
        <div className="new-cont">
            <h2 className="new-title">News Feed</h2>
            <ImageCarousel className="news-carousel" category="news">{data}</ImageCarousel>
        </div>
    )
}


export default News