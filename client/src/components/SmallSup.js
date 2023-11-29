import "./SmallSup.css"
import Carousel from "react-multi-carousel"
import SmallSupCard from "./SmallSupCard";
import React, { Suspense } from 'react';



function SmallSup(){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const supporters=[
        {
            name:'get3d',
            link:'https://get3d.gr/en/ ',
            img:'Media/support/get_3d.png'

        },
        {
            name:'csrl',
            link:'https://csrl.hmu.gr/',
            img:'Media/support/CSRL.png'
        },
        {
          name:'mechatron',
          link:'https://mechatron.eu/',
          img:'Media/support/mechatron_1.png'
        },
        {
          name:'solidworks',
          link:'https://www.solidworks.com/',
          img:'Media/support/solidworks.png'
        },
        {
          name:'Veneris',
          link:'https://venerisdeco.gr/',
          img:'Media/support/VENERIS.png'
        }
      ]

    const suppCar = <Carousel
        responsive={responsive}
        swipeable={true}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}
        className='support-carousel'
        >
{Array(supporters.length).fill(supporters.map((supporter, i) => <Suspense fallback={<div>Loading . . .</div>}><SmallSupCard supporter={supporter}/></Suspense>))}
</Carousel>;

    return(
        
        <div className="smallsup-cont">
            <h2 className="smallsup-title">Supporters - Contributors</h2>
            {suppCar}
        </div>
    )
}


export default SmallSup