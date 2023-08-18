import React, { Suspense, useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageCarousel.css"


const Card = React.lazy(() => import('./Card'));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1650 },
    items: 4
  },
  laptop: {
    breakpoint: { max: 1650, min: 1100},
    items: 3
  },
  tablet: {
    breakpoint: { max: 1100, min: 810 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 810, min: 0 },
    items: 1
  }
};



function ImageCarousel(props) {
  const [carousel, setCarousel] = useState([]);
  const [posts, setPosts] = useState([]);

  // useEffect for data
  useEffect(() => {
    setPosts(props.data);
  }, [props.data]);


  // useEffect for carousel
  useEffect(() => {
    setCarousel(postCarousel);  
  }, [posts]);
  

  const postCarousel = posts && posts.Item ?  (
    <Carousel
      responsive={responsive}
      swipeable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="post-carousel"
    >
      {posts?.Item?.map((post, index) => (
        <Suspense key={index} fallback={<div>Loading . . .</div>}>
          <Card  id={post?.id} title={post?.title} desc={post?.post_desc} date={post?.created_at} img={post?.images[0]} />
        </Suspense>
      ))}
    </Carousel>
  ) : (
    <div>Loading . . .</div>
  );


  return <>{carousel}</>;
}

export default ImageCarousel;