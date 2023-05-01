import "./MemberCard.css"


function MemberCard(props) {


    const academic_id = props.academic_id
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
            return "Τμήμα Μηχανικών Υπολογιστών"
        }
        else if(props.school === "other"){
            return "Εξωτερικός Συνεργάτης"
        }
    }
    const date = props.subscription_date
    const subscription_date = date.substring(0,4)

    const end_date = () => {
        if (!props.end_date) {
          return "Current";
        } else {
          const date = props.end_date
          const end_date = date.substring(0,4)
          return end_date
        }
      }

    // const image = () => {
    //     if(props.image === undefined){
    //         return "Media/about.jpg"
    //     }
    //     else{
    //         return `Uploads/${props.image}`
    //     }
    // }

    const image = () => {
        if (props.image === undefined) {
          return "Media/about.jpg";
        } else {
          return "Uploads/members" + props.image;
        }
      };
      


    return (
        <div className='members-con'>
            {console.log(props.image)}
            {console.log(image())}
            <img id='members-img' src={image()}/>
            <div className='members-body'>
                <h3 className='members-title'>{last_name} {first_name}</h3>
                <p className='members-school'>{school()}</p>
                <p className='members-date'>{subscription_date} - {end_date()}</p>
            </div>
      </div>
    );
}

export default MemberCard;