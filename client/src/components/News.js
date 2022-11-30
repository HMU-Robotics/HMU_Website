import React, { useState , useEffect } from "react";
import "./News.css"
import ImageCarousel from "./ImageCarousel";


function News(){

    const [newsList , setnewsList] = useState([])

    useEffect(()=>{

    },[newsList])

    return(
        <div className="new-cont">
            <h2 className="new-title">News Feed</h2>
            <ImageCarousel className="news-carousel">News</ImageCarousel>
        </div>
    )
}


export default News