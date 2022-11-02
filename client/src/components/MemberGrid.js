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
        img: "Media/testimage.png",
        dateAdded: "2021",
        dateRemoved: "Current"
    },
    {
        id: 2,
        name:  "name2",
        desc:  "test2",
        img: "Media/testimage.png",
        dateAdded: "2021",
        dateRemoved: "2022"
    },
    {
        id: 3,
        name:  "name3",
        desc:  "test3",
        img: "Media/testimage.png",
        dateAdded: "2020",
        dateRemoved: "2021"
    }
];


function MemberGrid(props) {

    const [memberCards, setMemberCards] = useState(cardData);

    const [memberData, setMemberData] = useState();

        // useEffect(() => {
    //     fetch(`api/page/for/post`, {})
    //       .then((res) => res.json())
    //       .then((response) => {
    //         setMemberData(response);
    //         console.log(`api/page/for/post`);
    //       })
    //       .catch((error) => console.log(error));
    //   }, []);

    function sortMembers() {
        
    }



    return(
        <div className="member-grid">
            <h2 className='members-box-title'>Members</h2>
            <Grid2 container spacing={4} columns={16} display="flex" alignItems="center">
                {Array(5).fill(memberCards.map((member, i) => (
                    <Grid2 md={4} key={i}>
                        <Suspense fallback={<div>Loading...</div>}><MemberCard key={i}>{member}</MemberCard></Suspense>
                    </Grid2>
                )))}
            </Grid2>
        </div>
    );

}


export default MemberGrid;