import React, { Suspense, useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageCarousel.css"


const Card = React.lazy(() => import('./Card'));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1500 },
    items: 4
  },
  laptop: {
    breakpoint: { max: 1500, min: 1100},
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
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    if (data !== undefined && data !== null) {
      switch(props.category) {
        case "projects":
          setCarousel(projectCar);
          break;
        case "seminars":
          setCarousel(seminarCar);
          break;
        case "news":
          setCarousel(newsCar);
          break;
        default:
          setCarousel(<div>Loading . . .</div>);
          break;
      }
    }
  }, [props.category, data]);

  const projectCar = data && data.Item ? (
    <Carousel
      responsive={responsive}
      swipeable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="project-carousel"
    >
      {data?.Item?.map((project, index) => (
        <Suspense key={index} fallback={<div>Loading . . .</div>}>
          {console.log(project)}
          <Card key={index} id={project?.id} title={project?.title} desc={project?.post_desc} date={project?.created_at} img={project?.img} />
        </Suspense>
      ))}
    </Carousel>
  ) : (
    <div>Loading . . .</div>
  );
  

  const newsCar = (
    <Carousel
      responsive={responsive}
      swipeable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="news-carousel"
    >
      {data?.Item?.map((news, index) => (
        <Suspense key={index} fallback={<div>Loading . . .</div>}>
          {console.log(news)}
          <Card key={index} id={news?.id} title={news?.title} desc={news?.post_desc} date={news?.created_at} img={news?.img} />
        </Suspense>
      ))}
    </Carousel>
  );

  const seminarCar = (
    <Carousel
      responsive={responsive}
      swipeable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="seminar-carousel"
    >
      {data?.Item?.map((seminar, index) => (
        <Suspense key={index} fallback={<div>Loading . . .</div>}>
          {console.log(seminar)}
          <Card key={index} id={seminar?.id} title={seminar?.title} desc={seminar?.post_desc} date={seminar?.created_at} img={seminar?.img} />
        </Suspense>
      ))}
    </Carousel>
  );

  return <>{carousel}</>;
}

export default ImageCarousel;