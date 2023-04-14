import React, { Children, Suspense, useEffect, useState } from 'react';
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

  const [data, setData] = useState(projectData);
  const [carouselData, setCarouselData] = useState(projectCar)
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if(props.children === "Projects") {
      fetch(`https://robotics-club.hmu.gr:443/api/posts/latest`, {})
      .then((res) => res.json())
      .then((response) => {
        setIsLoading(false);
        setData(response)
        setCarouselData(projectCar)
        console.log(`https://robotics-club.hmu.gr:443/api/posts/latest`);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
    })
    }
    else if(props.children === "Seminars") {
      setData(seminarData)
      setCarouselData(seminarCar)
    }
    else if(props.children === "News") {
      setData(newsData)
      setCarouselData(newsCar)
    }
  }, []);

  const projectCar =     <Carousel
  responsive={responsive}
  swipeable={true}
  arrows={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  infinite={true}
  className='project-carousel'
  >
    {Array(data.length).fill(data.map((project, i) => <Suspense fallback={<div>Loading . . .</div>}><Card key={i}>{project}</Card></Suspense>))}
  </Carousel>;

const newsCar =     <Carousel
responsive={responsive}
swipeable={true}
arrows={true}
autoPlay={true}
autoPlaySpeed={5000}
infinite={true}
className='news-carousel'
>
{Array(data.length).fill(data.map((newsArticle, i) => <Suspense fallback={<div>Loading . . .</div>}><Card key={i}>{newsArticle}</Card></Suspense>))}
</Carousel>;


const seminarCar =     <Carousel
responsive={responsive}
swipeable={true}
arrows={true}
autoPlay={true}
autoPlaySpeed={5000}
infinite={true}
className='seminar-carousel'
>
{Array(data.length).fill(data.map((seminar, i) => <Suspense fallback={<div>Loading . . .</div>}><Card key={i}>{seminar}</Card></Suspense>))}
</Carousel>;


    return(
      <div>{carouselData}</div>
    );
}

export default ImageCarousel;