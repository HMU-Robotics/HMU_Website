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

const projectData = [
  {
    id: 1,
    title: "Test title",
    desc: "This is a very long and useless text that is ment only as a very long and long text to see and test",
    date: "11/2/2012",
    img: "Media/about.jpg"
  },
  {
    id: 2,
    title: "Ptitle2",
    desc: "desc2",
    date: "date2",
    img: "Media/about.jpg"
  },
  {
    id: 3,
    title: "Ptitle3",
    desc: "desc3",
    date: "date3",
    img: "Media/about.jpg"
  },
  {
    id: 4,
    title: "Ptitle4",
    desc: "desc4",
    date: "date4",
    img: "Media/about.jpg"
  },
  {
    id: 5,
    title: "Ptitle5",
    desc: "desc5",
    date: "date5",
    img: "Media/about.jpg"
  }
];

const seminarData = [

  {
    id: 7,
    title: "Test title",
    desc: "This is a very long and useless text that is ment only as a very long and long text to see and test",
    date: "11/2/2012",
    img: "Media/about.jpg"
  },
  {
    id: 8,
    title: "Stitle3",
    desc: "desc3",
    date: "date3",
    img: "Media/about.jpg"
  },
  {
    id: 9,
    title: "Stitle4",
    desc: "desc4",
    date: "date4",
    img: "Media/about.jpg"
  },
  {
    id: 10,
    title: "Stitle5",
    desc: "desc5",
    date: "date5",
    img: "Media/about.jpg"
  }
];

const newsData = [
  {
    id: 11,
    title: "Test title",
    desc: "This is a very long and useless text that is ment only as a very long and long text to see and test",
    date: "11/2/2012",
    img: "Media/about.jpg"
  },
  {
    id: 12,
    title: "title2",
    desc: "desc2",
    date: "date2",
    img: "Media/about.jpg"
  },
  {
    id: 13,
    title: "title3",
    desc: "desc3",
    date: "date3",
    img: "Media/about.jpg"
  },
  {
    id: 14,
    title: "title4",
    desc: "desc4",
    date: "date4",
    img: "Media/about.jpg"
  },
  {
    id: 15,
    title: "title5",
    desc: "desc5",
    date: "date5",
    img: "Media/about.jpg"
  }
];


function ImageCarousel(props) {
  const [carousel, setCarousel] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    if (data !== undefined && data !== null) {
      if (props.category === "projects") {
        setCarousel(projectCar);
      } else if (props.category === "seminars") {
        setCarousel(seminarCar);
      } else if (props.category === "news") {
        setCarousel(newsCar);
      }
    } else {
      setCarousel(<div>Loading . . .</div>);
    }
  }, [props.category, data]);

  const projectCar = (
    <Carousel
      responsive={responsive}
      swipeable={true}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite={true}
      className="project-carousel"
    >
      {Array(5)
        .fill(data?.Item)
        .map((project, index) => (
          <Suspense key={index} fallback={<div>Loading . . .</div>}>
            <Card>{project}</Card>
          </Suspense>
        ))}
    </Carousel>
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
      {Array(5)
        .fill(newsData)
        .map((newsArticle, index) => (
          <Suspense key={index} fallback={<div>Loading . . .</div>}>
            <Card>{newsArticle}</Card>
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
      {Array(5)
        .fill(seminarData)
        .map((seminar, index) => (
          <Suspense key={index} fallback={<div>Loading . . .</div>}>
            <Card>{seminar}</Card>
          </Suspense>
        ))}
    </Carousel>
  );

  return <>{carousel}</>;
}

export default ImageCarousel;