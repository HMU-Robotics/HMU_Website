import React, { useState , useEffect } from "react";
import NewsCard from "./NewsCard";
import "./News.css"


function News(){

    const [newsList , setnewsList] = useState([])


    useEffect(()=>{

    },[newsList])

    return(
        <div className="new-main">
            <div className="news-box">
                <h2 className="news-title"> News Feed</h2>
                    <div className="news-holder">
                        <button className="arrows" id="arrow_left">◄</button>  {/* TODO : onclick change to prev news*/}
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />                                    {/* TODO : Number of cards based to width of screen*/}
                        <NewsCard />
                        <NewsCard />
                        <button className="arrows" id="arrow_right">►</button> {/*TODO : onclick change to next news*/}
                    </div>
            </div>
        </div>
    )
}


export default News