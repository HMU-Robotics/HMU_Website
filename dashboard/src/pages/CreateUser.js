import React , { useState } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"
import axios from "axios"


function CreateUser (){


    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addMember"
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState(null)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }


    const handleSubmit = async () => {
        await axios.post(api_url, {
            'title': title,
            'content': content,
            'img': image
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
            <h1>CreateUser Page</h1>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="title" onChange={handleTitle}>
                    <Form.Label>Title</Form.Label>
                </Form.Group>
                {/* <Form.Select>        later will be radio or select for department
                    <option value="1"></option>
                </Form.Select> */}
                <Form.Group onChange={handleContent}>
                    <Form.Label>Add description</Form.Label>
                </Form.Group>
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

export default CreateUser