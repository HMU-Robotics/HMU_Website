import React, { useState, useEffect } from "react";
import './Posts.css'
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";


function Posts() {

    const { postid } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();



    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/posts/${postid}`, {})
          .then((res) => res.json())
          .then((response) => {
            setData(response);
            setIsLoading(false);
            console.log(`https://robotics-club.hmu.gr:443/api/posts/${postid}`);
            console.log(response)
          })
          .catch((error) =>{
               console.log(error);
               setIsLoading(true);
               });
      }, []);


    return(
        <div>
          {console.log(data)}
          <h1 className="post-title">{data?.Post?.title}</h1>
          <div className="image-list-wrapper">
              <img src={`Uploads/${data?.Images[0]?.img}`} alt="img1"></img>
              <img src={`Uploads/${data?.Images[1]?.img}`} alt="img2"></img>
              <img src={`Uploads/${data?.Images[2]?.img}`} alt="img3"></img>
          </div>
          <ReactMarkdown className="post-main-text">{data?.Post?.content}</ReactMarkdown>
        </div>
    );
}

export default Posts;