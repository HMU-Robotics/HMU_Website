import React, { useState , useEffect } from "react";
import NewsCard from "./NewsCard";
import useWindowDimensions from "../hooks/UseWindowDimensions";
import "./News.css"


function News(){

    const [newsList , setnewsList] = useState([])

    const { width, height } = useWindowDimensions();

    const newsCardAmount = width <= 450 ? (Math.floor(width/100)) : 5;      // option 1 for mobiles - option 2 for desktop

    
    function previousNews() {

    }

    function nextNews() {

    }

    useEffect(()=>{

    },[newsList])

    return(
        <div className="new-main">
            <div className="news-box">
                <h2 className="news-title"> News Feed</h2>
                    <div className="news-holder">
                        <button className="arrows" id="arrow_left" onClick={previousNews}>◄</button>  {/* TODO : onclick change to prev news*/}

                        {Array(newsCardAmount).fill(<NewsCard />)}

                        <button className="arrows" id="arrow_right">►</button> {/*TODO : onclick change to next news*/}
                    </div>
            </div>
        </div>
    )
}


export default News