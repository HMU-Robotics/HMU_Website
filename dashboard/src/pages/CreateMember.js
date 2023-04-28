import React , { useState } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"
import axios from "axios"


function CreateMember (){


    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addMember"
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [academic_id, setAcademicID] = useState("")
    const [school, setSchool] = useState("ECE")
    const [subscriptionDate, setSubcriptionDate] = useState()
    const [role, setRole] = useState("")
    const [image, setImage] = useState([])


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

        // testing purposes
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
    }


    return(
        <>
            <h1>Create New Member</h1>

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
                <Form.Select className="school" onChange={handleSchool}>
                    <Form.Label>University Course</Form.Label>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default CreateMember