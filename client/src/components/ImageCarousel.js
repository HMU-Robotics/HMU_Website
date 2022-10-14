import React, { Suspense } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageCarousel.css"


const ProjectCard = React.lazy(() => import('./ProjectCard'));


function ImageCarousel(props) {

    const cardType = "Project"; // this value will be passed from page to
                                // image carousel through props when functional

    let card;
    
    if(cardType === "Project") {
       card = <ProjectCard/>;
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
    <Carousel
     responsive={responsive}
     swipeable={true}
     arrows={true}
     autoPlay={true}
     autoPlaySpeed={5000}
     infinite={true}
     className='carousel'
     >

      {Array(10).fill(<Suspense fallback={<div>Loading...</div>}>{card}</Suspense>)}

    </Carousel>
    );
}

export default ImageCarousel;