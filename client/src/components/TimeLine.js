import React, { useState , useEffect } from "react";
import { Chrono } from "react-chrono"
import "./TimeLine.css"




function TimeLine(){

    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      },
      {
        title: "May 1941",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      },
      {
        title: "May 1943",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      },
      {
        title: "May 1944",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      },
      {
        title: "May 1945",
        cardTitle: "Dunkirk",
        url: "http://www.history.com",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: "http://someurl/image.jpg"
          }
        }
      }
    ];
    
    function test() {
      console.log("hey")
    }

    return(
        <div className="Time-box">
            <h1 className="Time_title">TimeLine</h1>
                <div style={{ width: "100%", height: "800px" }}>
                    <Chrono items={items} titlePosition="BOTTOM"  mode="VERTICAL_ALTERNATING" scrollable={{scrollbar: false}} onScrollEnd={() => test()} flipLayout showAllCardsHorizontal slideShow hideControls/>
                </div>
        </div>
    )
}



export default TimeLine