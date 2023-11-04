import React, { useState , useEffect , useContext} from "react";
import "./News.css"
import ImageCarousel from "./ImageCarousel";
import LanguageContext from "../hooks/LanguageContext"

function News(props){

    const [data , setData] = useState([])

    const { language, setLanguage } = useContext(LanguageContext);
    const lang = language === "english" ? "en" : "gr";

    
    useEffect(() => {
      fetch(`https://robotics-club.hmu.gr:443/api/posts/find/all/${lang}`, {})
        .then((res) => res.json())
        .then((response) => {
          setData(response);
          // console.log(`https://robotics-club.hmu.gr:443/api/posts/find/all/${lang}`);
          // console.log(response)
        })
        .catch((error) => {
          // console.log(error);
      })
    }, [language]);


    return(
        <div className="new-cont">
            <h2 className="new-title">Activities</h2>
            <ImageCarousel className="news-carousel" data={data}></ImageCarousel>
        </div>
    )
}


export default News