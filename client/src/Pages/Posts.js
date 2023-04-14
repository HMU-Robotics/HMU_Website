import React, { useState, useEffect } from "react";
import './Posts.css'
import { useParams } from "react-router-dom";


function Posts() {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();



    useEffect(() => {
        fetch(`http://localhost:4000/api/posts/${id}`, {})
          .then((res) => res.json())
          .then((response) => {
            setData(response);
            setIsLoading(false);
            console.log(`http://localhost:4000/api/posts/${id}`);
            console.log(response)
          })
          .catch((error) =>{
               console.log(error);
               setIsLoading(true);
               });
      }, []);


    return(
        <div>
                <h1 className="post-title">{data?.title}</h1>
                {/* <div className="image-list-wrapper">
                    <img src={data.imageList[0]} alt="img1"></img>
                    <img src={data.imageList[1]} alt="img2"></img>
                    <img src={data.imageList[2]} alt="img3"></img>
                </div> */}
                {/* <h2 className="post-image-header">{data.image_header}</h2> */}
                <p className="post-main-text">{data?.content}</p>
                
        </div>
    );
}

export default Posts;