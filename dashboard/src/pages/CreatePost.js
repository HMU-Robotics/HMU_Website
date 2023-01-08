import axios from "axios"
import React , { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import Form from "react-bootstrap/Form"


function CreatePost (){


    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addPost"
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [imageList, setImageList] = useState(null)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleImageList = (e) => {
        setImageList(e.target.value)
    }


    const handleSubmit = async () => {
        await axios.post(api_url, {
            'title': title,
            'content': content,
            'img': imageList
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
            <h1>CreatePost Page</h1>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="title" onChange={handleTitle()}>
                    <Form.Label>Title</Form.Label>
                </Form.Group>
                <Form.Group className="content" onChange={handleContent()}>
                    <Form.Label>Main Content</Form.Label>
                    <Form.Control as="textarea"/>
                </Form.Group>
                <Form.Group onChange={handleImageList()}>
                    <Form.Label>Add Images</Form.Label>
                    <Form.Control type="file" multiple/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default CreatePost