import React, { useState, useEffect } from "react";
import './Posts.css'
import { useParams } from "react-router-dom";


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
          <h1 className="post-title">{data?.Item?.title}</h1>
          <div className="image-list-wrapper">
              {/* <img src={data?.Item.imageList[0]} alt="img1"></img>
              <img src={data?.Item.imageList[1]} alt="img2"></img>
              <img src={data?.Item.imageList[2]} alt="img3"></img> */}
          </div>
          <p className="post-main-text">{data?.Item?.content}</p>                
        </div>
    );
}

export default Posts;