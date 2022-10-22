import React, { useState , useEffect } from "react";
import NewsCard from "./NewsCard";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import "./News.css"
import ImageCarousel from "./ImageCarousel";


function News(){

    const [newsList , setnewsList] = useState([])

    const { width, height } = useWindowDimensions();

    useEffect(()=>{

    },[newsList])

    return(
        <ImageCarousel className="news-carousel">News</ImageCarousel>
    )
}


export default News