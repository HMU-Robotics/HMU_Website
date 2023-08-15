import React, { Suspense } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import './MemberGrid.css'
import { useState, useEffect, useContext} from 'react'
import LanguageContext from '../hooks/LanguageContext';


const MemberCard = React.lazy(() => import('./MemberCard'));

// TODO fix sorting of members by name / years member.

function MemberGrid(props) {

  const { language, setLanguage } = useContext(LanguageContext);
    const [memberData, setMemberData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fullname, setFullName] = useState(`fullname_en`);

     useEffect(() => {
     fetch(`https://robotics-club.hmu.gr:443/api/members/find/all`, {})
       .then((res) => res.json())
       .then((response) => {
         setIsLoading(false);
         setMemberData(response);
         console.log(`https://robotics-club.hmu.gr:443/api/members/find/all`);
         console.log(response)
       })
       .catch((error) => {
         console.log(error);
         setIsLoading(true);
     })
   }, []);

   useEffect(() => {
    if(language === "english") {
      setFullName(`fullname_en`);
    }
    else if(language === "greek") {
      setFullName(`fullname_gr`);
    }
   }, [language]);


    return (
      <>
        {language === "english" && <h2 className="coordination-box-title">Coordination Members</h2>}
        {language === "greek" && <h2 className="coordination-box-title">Μέλη Συντονισμού</h2>}
        <Grid2 container spacing={4} columns={12} display="flex" alignItems="center">
          {memberData && memberData.Item ? (
            <>
              {["President", "Secretary", "Treasurer"].map((role) => {
                const filteredMembers = memberData.Item.filter(
                  (member) => member.role === role
                );
                return (
                  <div className="member-grid">
                    <Grid2 xs={12} sm={6} md={4} lg={3} key={role}>
                      {filteredMembers.length > 0 ? (
                        <Suspense fallback={<div>Loading...</div>}>
                          <MemberCard
                            key={role}
                            end_date={filteredMembers[0]?.end_date}
                            fullname={filteredMembers[0]?.[fullname]}
                            school={filteredMembers[0]?.school}
                            subscription_date={filteredMembers[0]?.subscription_date}
                            image={filteredMembers[0]?.images[0]?.image_url}
                            role={filteredMembers[0]?.role}
                          />
                        </Suspense>
                      ) : (
                        <div>No {role} found</div>
                      )}
                    </Grid2>
                  </div>
                );
              })}
            </>
          ) : (
            <div>Loading...</div>
          )}
        </Grid2>

        <div className="member-grid member-grid-members">
          {language === "english" && <h2 className="members-box-title">Members</h2>}
          {language === "greek" && <h2 className="members-box-title">Μέλη</h2>}
          <Grid2 container spacing={4} columns={12} display="flex" alignItems="center">
          {memberData && memberData.Item ? (
            <>
            {memberData.Item.filter((member) => !["President", "Secretary", "Treasurer"].includes(member.role)).map((member, i) => (
              <div className="member-grid">
                <Grid2 xs={12} sm={6} md={4} lg={3} key={i}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <MemberCard
                      key={i}
                      end_date={member?.end_date}
                      fullname={member?.[fullname]}
                      school={member?.school}
                      subscription_date={member?.subscription_date}
                      image={member?.images[0]?.image_url}
                      role={member?.role}
                    />
                  </Suspense>
                </Grid2>
              </div>
            ))}
            </>
          ) : (
            <div>Loading...</div>
          )}
          </Grid2>
        </div>
      </>
    );



}


export default MemberGrid;