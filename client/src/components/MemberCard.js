import "./MemberCard.css"


function MemberCard(props) {


    const academic_id = props.children.academic_id;
    const first_name = props.children.first_name
    const last_name = props.children.last_name
    const img = props.children.images.image_url;
    const school = () => {
        if(props.children.school === "ECE"){
            return "Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών"
        }
        else if(props.children.school === "MECH"){
            return "Μηχανολόγων Μηχανικών"
        }
        else if(props.children.school === "EE"){
            return "Ηλεκτρολόγων Μηχανικών"
        }
        else if(props.children.school === "CE"){
            return "Τμήμα Μηχανικών Υπολογιστών"
        }
        else if(props.children.school === "other"){
            return "Εξωτερικός Συνεργάτης"
        }
    }
    const subscription_date = props.children.subscription_date
    const end_date = () => {
        if(props.children.end_date != null){
            return "Current"
        }
        else return props.children.end_date
    }



    return (
        <div className='members-con'>
            <img id='members-img' src={img}/>
            <div className='members-body'>
                <h3 className='members-title'>{last_name} {first_name}</h3>
                <p className='members-school'>{school}</p>
                <p className='members-date'>{subscription_date} - {}</p>
        </div>
      </div>
    );
}

export default MemberCard;