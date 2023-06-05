import React, { useState, useEffect } from "react";
import './Posts.css'
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";



function Posts() {

    const { postid } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const [zoomedImage , setZoomedImage] = useState(null)

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

    const handleImageClick = (e)=>{
      setZoomedImage(e)
      console.log("image clicked : " + e)
      console.log(zoomedImage)
    }

    const handleOverlayClick = ()=>{
      setZoomedImage(null)
      console.log("overlay-click")
    }

    return (
      <div className="post-page">
        <h1 className="post-title">{data?.Post?.title}</h1>
        <div className="image-list-wrapper">
          {data?.Images?.slice(0, 3).map((image) => {
            const imageSrc = `/Uploads/posts/${image.img}`;
            return (
              <img
                key={image.id}
                src={imageSrc}
                alt="Post Image"
                onClick={() => handleImageClick(imageSrc)}
                className="zoomable-image"
              />
            );
          })}
        </div>
        {zoomedImage && (
          <div className="zoom-overlay" onClick={handleOverlayClick}>
            <img src={zoomedImage} alt="Zoomed Image" className="zoomed-image" />
          </div>
        )}
        <div className="text-section">
          <ReactMarkdown>{data?.Post?.content}</ReactMarkdown>
        </div>
      </div>
    );
  }

export default Posts;
