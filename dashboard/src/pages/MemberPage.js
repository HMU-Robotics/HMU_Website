import React , { useState, useEffect } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"
import axios from "axios"
import SpinnerButton from "../components/SpinnerButton"
import AlertBox from "../components/AlertBox"
import { useParams } from "react-router-dom";




function MemberPage() {

    const { memberID } = useParams();
    const [memberData, setMemberData] = useState([]);
    const api_url = `https://robotics-club.hmu.gr:443/api/dashboard/editMember/${memberID}`


    const [language, setLanguage] = useState("english")
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [academic_id, setAcademicID] = useState("");
    const [school, setSchool] = useState("ECE");
    const [subscriptionDate, setSubcriptionDate] = useState("");
    const [endDate, setEndDate] = useState(null);
    const [role, setRole] = useState("Member");
    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [buttonState, setButtonState] = useState(<Button variant="primary" type="submit">Submit</Button>);
    const [errorMessage, setErrorMessage] = useState(false);
    const [alertState, setAlertState] = useState(null);


    // enters previous data into the text boxes of page
    const setStartingData = (member) => {
        setLanguage(member.language);
        setFirstName(member.first_name);
        setLastName(member.last_name);
        setAcademicID(member.academic_id);
        setSchool(member.school);
        setSubcriptionDate(member.subscription_date);
        setEndDate(member.end_date);
        setRole(member.role);
    }



// useEffect for member data
useEffect(() => {
    fetch(`https://robotics-club.hmu.gr:443/api/members/${memberID}`, {})
        .then((res) => res.json())
        .then((response) => {
            setMemberData(response);
            setStartingData(memberData.Member);
            console.log(`https://robotics-club.hmu.gr:443/api/members/${memberID}`);
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        })
}, []);


// useEffect for loading button
useEffect(() => {
    if(isLoading === false) {
        setButtonState(<Button variant="primary" type="submit">Submit</Button>);
    }
    else {
        setButtonState(SpinnerButton);
    }
}, [isLoading]);


// useEffect for alert box
useEffect(() => {
    if(errorMessage === true) {
        setButtonState(null);
        setAlertState(AlertBox("Member"));
    }
    else {
        setAlertState(null);
    }
}, [errorMessage])

const handleLanguage = (e) => {
    setLanguage(e.target.value)
}

const handleFirstName = (e) => {
    setFirstName(e.target.value)
}

const handleLastName = (e) => {
    setLastName(e.target.value)
}

const handleAcademicID = (e) => {
    setAcademicID(e.target.value)
}

const handleSchool = (e) => {
    setSchool(e.target.value)
}

const handleSubscriptionDate = (e) => {
    const inputSubDate = new Date(e.target.value)
    const subDate = inputSubDate.toISOString()
    const formattedSubDate = subDate.substring(0,10).replace('T',' ')
    setSubcriptionDate(formattedSubDate)
}

const handleEndDate = (e) => {
    const inputEndDate = new Date(e.target.value)
    const subDate = inputEndDate.toISOString()
    const formattedEndDate = subDate.substring(0,10).replace('T',' ')
    setEndDate(formattedEndDate)
}

const handleImage = (e) => {
    const file = e.target.files[0]
    setImage(file)
}

const handleRole = (e) => {
    setRole(e.target.value)
}

const handleSubmit = async (e) => {

    // checks when button is pressed so it sets state to loading
    setIsLoading(true);

    e.preventDefault()

    const formData = new FormData()
    formData.append("language",language)
    formData.append("academic_id",academic_id)
    formData.append("first_name",firstname)
    formData.append("last_name",lastname)
    formData.append("school",school)
    formData.append("subscription_date",subscriptionDate)
    formData.append("end_date",endDate)
    formData.append("role",role)
    formData.append("upload_img",image)


    await axios.put(api_url, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    .then((res) => {
        console.log(res)
        console.log(res.status)
        setErrorMessage(false);
        window.location.reload();
    })
    .catch((err) => {
        console.log(err)
        setErrorMessage(true);
    })

    setIsLoading(false);
}


return(
    <>
        <h1 className="d-flex justify-content-center">Update Member</h1>

        <Form onSubmit={handleSubmit}>
            <Form.Label>Update Member</Form.Label>
            <Form.Group className="firstname" onChange={handleFirstName}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="lastname" onChange={handleLastName}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="academic_id" onChange={handleAcademicID}>
                <Form.Label>Academic ID</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Label>University Course</Form.Label>
            <Form.Select className="school" onChange={handleSchool}>
                <option value="ECE">Ηλεκτρολόγων Μηχ. Μηχ. Υπολογιστών</option>
                <option value="MECH">Μηχανολόγων Μηχανικών</option>
                <option value="EE">Ηλεκτρολόγων Μηχανικών</option>
                <option value="CE">Μηχανικοί Υπολογιστών</option>
                <option value="other">Εξωτερικοί Συνεργάτες</option>
            </Form.Select>
            <Form.Group className="subcription_date" onChange={handleSubscriptionDate}>
                <Form.Label>Subscription Date</Form.Label>
                <Form.Control type="date"/>
            </Form.Group>
            <Form.Group className="end_date" onChange={handleEndDate}>
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date"/>
            </Form.Group>
            <Form.Select className="role" onChange={handleRole}>
                <Form.Label>Role</Form.Label>
                <option value="Member">Member</option>
                <option value="Secretary">Secretary</option>
                <option value="Treasurer">Treasurer</option>
                <option value="President">President</option>
            </Form.Select>
            <Form.Group onChange={handleImage}>
                <Form.Label>Add Image</Form.Label>
                <Form.Control type="file"/>
            </Form.Group>
            {buttonState}
            {alertState}
        </Form>
    </>
)


}

export default MemberPage;
