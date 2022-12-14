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

  const [projects, setProjects] = useState(projectData);
  const [news, setNews] = useState(newsData);
  const [seminars, setSeminars] = useState(seminarData);
  const [isLoading, setIsLoading] = useState(true);


  // need route from api to fetch data

  // useEffect(() => {
  //   fetch(`http://localhost:4000/api/find/all`, {})
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setIsLoading(false);
  //       sortMembers(response);
  //       console.log(`http://localhost:4000/api/find/all`);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(true);
  //   })
  // }, []);




  let carouselItems;

  useEffect(() => {
    if(props.children === "Projects") {
       carouselItems = projectCar;
    }
    else if(props.children === "Seminars") {
       carouselItems = seminarCar;
    }
    else if(props.children === "News") {
       carouselItems = newsCar;
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
    {Array(projectData.length).fill(projects.map((project, i) => <Suspense fallback={<div>Loading . . .</div>}><Card key={i}>{project}</Card></Suspense>))}
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
{Array(newsData.length).fill(news.map((newsArticle, i) => <Suspense fallback={<div>Loading . . .</div>}><Card key={i}>{newsArticle}</Card></Suspense>))}
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
{Array(seminarData.length).fill(seminars.map((seminar, i) => <Suspense fallback={<div>Loading . . .</div>}><Card key={i}>{seminar}</Card></Suspense>))}
</Carousel>;

carouselItems = props.children === "News" ? newsCar : (props.children === "Projects" ? projectCar : seminarCar);

    return(
      <div>{carouselItems}</div>
    );
}

export default ImageCarousel;