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
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
            </div>
        </div>
    )
}


export default News