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

    return(
          <div style={{ width: "100%", height: "700px"}}>
            <h2 className="time-title">History</h2>
              <Chrono items={items} mode="HORIZONTAL" showAllCardsHorizontal slideShow slideItemDuration={3000}
                theme={{
                  primary: '#1C0C3C',
                  secondary: '#000',
                  cardBgColor: '#fff',
                  titleColor: '#1C0C3C',
                  titleColorActive: '#fff',
                }}
                fontSizes={{
                  cardSubtitle: '0.8rem',
                  cardText: '0.8rem',
                  cardTitle: '1.3rem',
                  title: '1.2rem',
                }}
                buttonTexts={{
                  first: 'Jump to First',
                  last: 'Jump to Last',
                  next: 'Next',
                  previous: 'Previous',
                }}
                />
          </div>
    )
}



export default TimeLine