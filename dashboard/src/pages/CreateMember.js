import React , { useState, useEffect } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"
import axios from "axios"
import SpinnerButton from "../components/SpinnerButton"
import AlertBox from "../components/AlertBox"


function CreateMember (){


    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addMember"
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [academic_id, setAcademicID] = useState("")
    const [school, setSchool] = useState("ECE")
    const [subscriptionDate, setSubcriptionDate] = useState()
    const [role, setRole] = useState("Member")
    const [image, setImage] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [buttonState, setButtonState] = useState(<Button variant="primary" type="submit">Submit</Button>);
    const [errorMessage, setErrorMessage] = useState(false);
    const [alertState, setAlertState] = useState(null);


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
        formData.append("academic_id",academic_id)
        formData.append("first_name",firstname)
        formData.append("last_name",lastname)
        formData.append("school",school)
        formData.append("subscription_date",subscriptionDate)
        formData.append("role",role)
        formData.append("upload_img",image)


        await axios.post(api_url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {
            console.log(res)
            console.log(res.status)
        })
        .catch((err) => {
            console.log(err)
            
        })

        setIsLoading(false);
    }


    return(
        <>
            <h1 className="d-flex justify-content-center">Create New Member</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Label>Create New Member</Form.Label>
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

export default CreateMember