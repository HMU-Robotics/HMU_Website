import "./MemberCard.css"


function MemberCard(props) {


    const first_name = props.first_name
    const last_name = props.last_name
    const school = () => {
        if(props.school === "ECE"){
            return "Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών"
        }
        else if(props.school === "MECH"){
            return "Μηχανολόγων Μηχανικών"
        }
        else if(props.school === "EE"){
            return "Ηλεκτρολόγων Μηχανικών"
        }
        else if(props.school === "CE"){
            return "Τμήμα Μηχανικών Πληροφορικής"
        }
        else if(props.school === "other"){
            return "Εξωτερικός Συνεργάτης"
        }
    }
    const date = props.subscription_date
    const subscription_date = date.substring(0,4)
    const role = props.role

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
          return "Media/stock_image_man.png";
        } else {
          // return "/Uploads/members/" + props.image;
          return "/var/www/robotics-club.hmu.gr/HMU_Website/client/public/Uploads/members/" + props.image;
        }
      };


    return (
          <div className='members-con'>
            <div className='members-photo' style={{ backgroundImage: image()}}>
              {console.log(image)}
              <div className='members-body'>
                <h3 className='members-title'>{last_name} {first_name}</h3>
                {role === "President" && <p className='members-role'>President</p>}
                {role === "Treasurer" && <p className='members-role'>Treasurer</p>}
                {role === "Secretary" && <p className='members-role'>Secretary</p>}
                <p className='members-school'>{school()}</p>
                <p className='members-date'>{subscription_date} - {end_date()}</p>
                </div>
            </div>
          </div>
    );
}

export default MemberCard;