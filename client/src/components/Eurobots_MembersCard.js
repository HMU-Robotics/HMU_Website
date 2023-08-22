import React, { useContext } from "react";
import "./MemberCard.css"
import LanguageContext from '../hooks/LanguageContext';



function Eurobot_Member_Card(props) {


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
      else if(props.school === "CSD"){
        return "CSD"
      }
  }

  const role = props.role
  const fullname = props.fullname

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
              <p className="members-role">{role}</p>
              <p className='members-school'>{school()}</p>
              </div>
          </div>
        </div>
  );
}

export default Eurobot_Member_Card;