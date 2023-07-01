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
  const [projects, setProjects] = useState([]);
  const [seminars, setSeminars] = useState([]);

  useEffect(() => {
    setProjects(props.data[0]);
    setSeminars(props.data[1])
  }, [props.data]);


  // temporary change 
  useEffect(() => {
    if (projects !== undefined && projects !== null && seminars !== undefined && seminars !== null) {
      // switch(props.category) {
      //   case "projects":
      //     setCarousel(projectCar);
      //     break;
      //   case "seminars":
      //     setCarousel(seminarCar);
      //     break;
      //   case "news":
      //     setCarousel(newsCar);
      //     break;
      //   default:
      //     setCarousel(<div>Loading . . .</div>);
      //     break;
      // }

      setCarousel(newsCar);
    }
    else {
      setCarousel(<div>Loading . . .</div>);
    }
  }, [props.category, projects, seminars]);

  const projectCar = projects && projects.Item ? (
    <Carousel
      responsive={responsive}
      swipeable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="project-carousel"
    >
      {projects?.Item?.map((project, index) => (
        <Suspense key={index} fallback={<div>Loading . . .</div>}>
          {console.log(project)}
          <Card id={project?.id} title={project?.title} desc={project?.post_desc} date={project?.created_at} img={project?.img} />
        </Suspense>
      ))}
    </Carousel>
  ) : (
    <div>Loading . . .</div>
  );
  

  const newsCar = projects && projects.Item ?  (
    <Carousel
      responsive={responsive}
      swipeable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="news-carousel"
    >
      {console.log(projects)}
      {projects?.Item?.map((project, index) => (
        <Suspense key={index} fallback={<div>Loading . . .</div>}>
          {console.log(project)}
          <Card  id={project?.id} title={project?.title} desc={project?.post_desc} date={project?.created_at} img={project?.img} />
        </Suspense>
      ))}
      {seminars?.Item?.map((seminar, index) => (
        <Suspense key={index} fallback={<div>Loading . . .</div>}>
          {console.log(seminar)}
          <Card  id={seminar?.id} title={seminar?.title} desc={seminar?.post_desc} date={seminar?.created_at} img={seminar?.img} />
        </Suspense>
      ))}
    </Carousel>
  ) : (
    <div>Loading . . .</div>
  );

  const seminarCar = projects && projects.Item ?  (
    <Carousel
      responsive={responsive}
      swipeable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="seminar-carousel"
    >
      {projects?.Item?.map((seminar, index) => (
        <Suspense key={index} fallback={<div>Loading . . .</div>}>
          {console.log(seminar)}
          <Card id={seminar?.id} title={seminar?.title} desc={seminar?.post_desc} date={seminar?.created_at} img={seminar?.img} />
        </Suspense>
      ))}
    </Carousel>
  ) : (
    <div>Loading . . .</div>
  );

  return <>{carousel}</>;
}

export default ImageCarousel;