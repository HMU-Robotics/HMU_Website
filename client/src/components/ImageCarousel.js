import React, { Children, Suspense, useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ImageCarousel.css"


const ProjectCard = React.lazy(() => import('./ProjectCard'));

const NewsCard = React.lazy(() => import('./NewsCard'));

const SeminarCard = React.lazy(() => import('./SeminarCard'));

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

const projectData = [
  {
    id: 1,
    title: "Ptitle1",
    desc: "desc1",
    date: "date1",
    img: "Media/testimage.png"
  },
  {
    id: 2,
    title: "Ptitle2",
    desc: "desc2",
    date: "date2",
    img: "Media/testimage.png"
  },
  {
    id: 3,
    title: "Ptitle3",
    desc: "desc3",
    date: "date3",
    img: "Media/testimage.png"
  },
  {
    id: 4,
    title: "Ptitle4",
    desc: "desc4",
    date: "date4",
    img: "Media/testimage.png"
  },
  {
    id: 5,
    title: "Ptitle5",
    desc: "desc5",
    date: "date5",
    img: "Media/testimage.png"
  }
];

const seminarData = [
  {
    id: 6,
    title: "Stitle1",
    desc: "desc1",
    date: "date1",
    img: "Media/testimage.png"
  },
  {
    id: 7,
    title: "Stitle2",
    desc: "desc2",
    date: "date2",
    img: "Media/testimage.png"
  },
  {
    id: 8,
    title: "Stitle3",
    desc: "desc3",
    date: "date3",
    img: "Media/testimage.png"
  },
  {
    id: 9,
    title: "Stitle4",
    desc: "desc4",
    date: "date4",
    img: "Media/testimage.png"
  },
  {
    id: 10,
    title: "Stitle5",
    desc: "desc5",
    date: "date5",
    img: "Media/testimage.png"
  }
];

const newsData = [
  {
    id: 11,
    title: "title1",
    desc: "desc1",
    date: "date1",
    img: "Media/testimage.png"
  },
  {
    id: 12,
    title: "title2",
    desc: "desc2",
    date: "date2",
    img: "Media/testimage.png"
  },
  {
    id: 13,
    title: "title3",
    desc: "desc3",
    date: "date3",
    img: "Media/testimage.png"
  },
  {
    id: 14,
    title: "title4",
    desc: "desc4",
    date: "date4",
    img: "Media/testimage.png"
  },
  {
    id: 15,
    title: "title5",
    desc: "desc5",
    date: "date5",
    img: "Media/testimage.png"
  }
];


function ImageCarousel(props) {

  console.log(projectData.length);

  const [projects, setProjects] = useState(projectData);

  const [news, setNews] = useState(newsData);

  const [seminars, setSeminars] = useState(seminarData);

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
    {Array(projectData.length).fill(projects.map((project, i) => <Suspense fallback={<div>Loading . . .</div>}><ProjectCard key={i}>{project}</ProjectCard></Suspense>))}
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
{Array(newsData.length).fill(news.map((newsArticle, i) => <Suspense fallback={<div>Loading . . .</div>}><NewsCard key={i}>{newsArticle}</NewsCard></Suspense>))}
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
{Array(seminarData.length).fill(seminars.map((seminar, i) => <Suspense fallback={<div>Loading . . .</div>}><SeminarCard key={i}>{seminar}</SeminarCard></Suspense>))}
</Carousel>;

carouselItems = props.children === "News" ? newsCar : (props.children === "Projects" ? projectCar : seminarCar);

    return(
      <div>{carouselItems}</div>
    );
}

export default ImageCarousel;