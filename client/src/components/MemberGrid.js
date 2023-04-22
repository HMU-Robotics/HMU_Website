import React, { Suspense } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import './MemberGrid.css'
import { useState, useEffect } from 'react'


const MemberCard = React.lazy(() => import('./MemberCard'));

const cardData = [
    {
        id: 1,
        name:  "name1",
        desc:  "test1",
        img: "Media/about.jpg",
        dateAdded: "2021",
        dateRemoved: "Current"
    },
    {
        id: 2,
        name:  "name2",
        desc:  "test2",
        img: "Media/about.jpg",
        dateAdded: "2021",
        dateRemoved: "2022"
    },
    {
        id: 3,
        name:  "name3",
        desc:  "test3",
        img: "Media/about.jpg",
        dateAdded: "2020",
        dateRemoved: "2021"
    }
];


function MemberGrid(props) {

    const [memberCards, setMemberCards] = useState(cardData);
    const [memberData, setMemberData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
     fetch(`https://robotics-club.hmu.gr:443/api/members/find/all`, {})
       .then((res) => res.json())
       .then((response) => {
         setIsLoading(false);
         sortMembers(response);
         console.log(`https://robotics-club.hmu.gr:443/api/members/find/all`);
         console.log(response)
       })
       .catch((error) => {
         console.log(error);
         setIsLoading(true);
     })
   }, []);

    function sortMembers(response) {
        var currentMembers = [];
        var previousMembers = [];
        var sortedMembers = [];

        for(const member in response) {
            if(member.subscription === 1) {
                currentMembers.push(member);
            }
            else if(member.subscription === 0) {
                previousMembers.push(member);
            }
        }

        // sort alphabetically based on last name
        currentMembers.sort(function(a, b) {
            let x = a.last_name.toLowerCase();
            let y = b.last_name.toLowerCase();
            if(x < y) {return -1;}
            if(x > y) {return 1;}
            return 0;
        });

        // sort based on year finished
        previousMembers.sort(function(a, b) {return a.end_date - b.end_date});

        sortedMembers = currentMembers.concat(previousMembers);
        setMemberData(sortedMembers);
    }



    return(
        <div className="member-grid">
            <h2 className='members-box-title'>Members</h2>
            <Grid2 container spacing={4} columns={12} display="flex" alignItems="center">
                {Array(1).fill(memberCards.map((member, i) => (
                    <Grid2 xs={12} sm={6} md={4} lg={3} key={i}>
                        <Suspense fallback={<div>Loading...</div>}><MemberCard key={i}>{member}</MemberCard></Suspense>
                    </Grid2>
                )))}
            </Grid2>
        </div>
    );

}


export default MemberGrid;