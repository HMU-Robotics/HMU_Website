import React, { Suspense } from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import './MemberGrid.css'
import { useState, useEffect, useContext} from 'react'
import LanguageContext from '../hooks/LanguageContext';


const MemberCard = React.lazy(() => import('./Eurobots_MembersCard'));

// TODO fix sorting of members by name / years member.

function MemberGridEuro(props) {


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
        //  console.log(`https://robotics-club.hmu.gr:443/api/members/find/all`);
        //  console.log(response)
       })
       .catch((error) => {
        //  console.log(error);
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


   const role_picker = (th) => {
    // console.log(th)
    switch(th){
      case "eurobots1" : return "Programming"
      case "eurobots2" : return "Programming"
      case "eurobot3" : return "Programming"
      case "th20079" : return "Programming Lead"
      case "th20550" : return "Team leader, Mechanical"
      case "th6209": return "Programming Lead"
      case "th6295" : return "Electronics, Management"
      case "tm20288" : return "Mechanical"
      case "tp4658" : return "Programming"
      case "ΓΦ20154" : return "Social Media Manager"
      default :  return "Eurobots"
    }
  }



    return (
      <>
        {language === "english" && <h2 className="coordination-box-title">Team Members</h2>}
        {language === "greek" && <h2 className="coordination-box-title">Ομαδα Eurobot</h2>}
        <div className="member-grid member-grid-members">
          <Grid2 container spacing={4} columns={12} display="flex" alignItems="center">
          {memberData && memberData.Item ? (
            <>
            {memberData.Item.filter((member) => ["Eurobots","President","Treasurer","Secretary","eurobots"].includes(member.role)).map((member, i) => (
              <div className="member-grid">
                <Grid2 xs={12} sm={6} md={4} lg={3} key={i}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <MemberCard
                      key={i}
                      fullname={member?.[fullname]}
                      image={member?.images[0]?.image_url}
                      role={role_picker(member?.academic_id)}
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


export default MemberGridEuro;