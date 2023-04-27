import React, { Suspense } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import './MemberGrid.css'
import { useState, useEffect } from 'react'


const MemberCard = React.lazy(() => import('./MemberCard'));



function MemberGrid(props) {

    const [memberData, setMemberData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
     fetch(`https://robotics-club.hmu.gr:443/api/members/find/all`, {})
       .then((res) => res.json())
       .then((response) => {
         setIsLoading(false);
         setMemberData(response);
        //  sortMembers(memberData);
         console.log(`https://robotics-club.hmu.gr:443/api/members/find/all`);
         console.log(response)
       })
       .catch((error) => {
         console.log(error);
         setIsLoading(true);
     })
   }, []);


   function sortMembers(memberList) {
    const { members } = memberList.Item;
  
    const sortedMembers = members.reduce(
      (acc, member) => {
        if (member.subscription === 1) {
          acc.currentMembers.push(member);
        } else if (member.subscription === 0) {
          acc.previousMembers.push(member);
        }
        return acc;
      },
      { currentMembers: [], previousMembers: [] }
    );
  
    // sort alphabetically based on last name
    sortedMembers.currentMembers.sort((a, b) =>
      a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase())
    );
  
    // sort based on year finished
    sortedMembers.previousMembers.sort((a, b) => a.end_date - b.end_date);
  
    const combinedMembers = [...sortedMembers.currentMembers, ...sortedMembers.previousMembers];
    setMemberData(combinedMembers);
  }



    return(
        <div className="member-grid">
            {console.log(memberData?.Item)}
            <h2 className='members-box-title'>Members</h2>
            <Grid2 container spacing={4} columns={12} display="flex" alignItems="center">
            {memberData && memberData.Item ? (
                memberData.map((member, i) => (
                    <Grid2 xs={12} sm={6} md={4} lg={3} key={i}>
                    <Suspense fallback={<div>Loading...</div>}><MemberCard key={i} academid_id={member?.academid_id} end_date={member?.end_date} first_name={member?.first_name} last_name={member?.last_name} school={member?.school} subscription_date={member?.subscription_date} image={member?.images[0]?.image_url} /></Suspense>
                    </Grid2>
                ))
            ) : (
                <div>Loading...</div>
            )}
            </Grid2>
        </div>
    );

}


export default MemberGrid;