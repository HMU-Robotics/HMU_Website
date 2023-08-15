import React, { useContext } from "react";
import "./MemberCard.css"
import LanguageContext from '../hooks/LanguageContext';



function MemberCard(props) {


  const { language, setLanguage } = useContext(LanguageContext);

  const school = () => {
      if(props.school === "ECE"){
        if(language === "english"){
          return "ECE"
        }
        else if(language === "greek"){
          return "ΗΜΜΥ"
        }
      }
      else if(props.school === "MECH"){
        if(language === "english") {
          return "Mechanical Engineering"
        }
        else if(language === "greek") {
          return "Μηχανολόγων Μηχανικών"
        }
      }
      else if(props.school === "EE"){
        if(language === "english") {
          return "Electrical Engineering"
        }
        else if(language === "greek") {
          return "Ηλεκτρολόγων Μηχανικών"
        }
      }
      else if(props.school === "CE"){
        if(language === "english") {
          return "Software Engineering"
        }
        else if(language === "greek"){
          return "Τμήμα Μηχανικών Πληροφορικής"
        }
      }
      else if(props.school === "other"){
        if(language === "english") {
          return "to do later"
        }
        else if(language === "greek") {
          return "Εξωτερικός Συνεργάτης"
        }
      }
  }
  const date = props.subscription_date
  const subscription_date = date.substring(0,4)
  const role = props.role
  const fullname = props.fullname

  const end_date = () => {
      if (!props.end_date) {
        return "Current";
      } else {
        const date = props.end_date
        const end_date = date.substring(0,4)
        return end_date
      }
    }


  const image = () => {
      if (props.image === undefined) {
        return "Media/about.jpg";
      } else {
        return "Uploads/members/" + props.image;
      }
    };


  return (
        <div className='members-con'>
          <div className='members-photo' style={{ backgroundImage: `url(${image()})` }}>
            <div className='members-body'>
              <h3 className='members-title'>{fullname}</h3>
              {role === "President" && language === "english" && <p className='members-role'>President</p>}
              {role === "Treasurer" && language === "english" && <p className='members-role'>Treasurer</p>}
              {role === "Secretary" && language === "english" && <p className='members-role'>Secretary</p>}
              {role === "President" && language === "greek" && <p className='members-role'>Πρόεδρος</p>}
              {role === "Treasurer" && language === "greek" && <p className='members-role'>Ταμίας</p>}
              {role === "Secretary" && language === "greek" && <p className='members-role'>Γραμματέας</p>}
              <p className='members-school'>{school()}</p>
              <p className='members-date'>{subscription_date} - {end_date()}</p>
              </div>
          </div>
        </div>
  );
}

export default MemberCard;