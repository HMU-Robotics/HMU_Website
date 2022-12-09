import React, { useState, useEffect } from "react";
import './Posts.css'

const exampleData = {
    title: "Post Title",
    imageList: ["Media/about.jpg", "Media/about.jpg", "Media/about.jpg"],
    image_header: "Lezanta?",
    text: "dfhfgfghfgh"
}


function Posts() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(exampleData);


    // need route to api for getAllPosts

    // useEffect(() => {
    //     fetch(`api/page/for/post`, {})
    //       .then((res) => res.json())
    //       .then((response) => {
    //         setData(response);
    //         setIsLoading(false);
    //         console.log(`api/page/for/post`);
    //       })
    //       .catch((error) =>{
    //            console.log(error);
    //            setIsLoading(true);
    //            });
    //   }, []);


    return(
        <div>
                <h1 className="post-title">{data.title}</h1>
                <div className="image-list-wrapper">
                    <img src={data.imageList[0]} alt="img1"></img>
                    <img src={data.imageList[1]} alt="img2"></img>
                    <img src={data.imageList[2]} alt="img3"></img>
                </div>
                <h2 className="post-image-header">{data.image_header}</h2>
                <p className="post-main-text">{data.text}</p>
                
        </div>
    );
}

export default Posts;