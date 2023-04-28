import axios from "axios"
import React , { useState } from "react"
import Button from "react-bootstrap/esm/Button"
import Form from "react-bootstrap/Form"


function CreatePost (){


    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addPost"
    const [title, setTitle] = useState()
    const [postDesc, setPostDesc] = useState()
    const [content, setContent] = useState()
    const [date, setDate] = useState()
    const [type, setType] = useState()
    const [imageList, setImageList] = useState([])

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handlePostDesc = (e) => {
        setPostDesc(e.target.value)
    }

    const handleDate = (e) => {
        const inputDate = new Date(e.target.value)
        const postDate = inputDate.toISOString()
        const formattedDate = postDate.substring(0,10).replace('T',' ')
        setDate(formattedDate)
    }

    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleImageList = (e) => {
        const files = Array.from(e.target.files)
        if(!files) return;
        
        setImageList([...imageList, ...files])
    }


    const handleSubmit = async (e) => {

        // testing purposes
        e.preventDefault()

        const formData = new FormData()
        formData.append("title",title)
        formData.append("content",content)
        formData.append("post_desc",postDesc)
        formData.append("created_at",date)
        formData.append("type",type)

        imageList.forEach((image) => {
            formData.append("upload_img", image)
        })


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
            <h1>Create New Post</h1>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className="title" onChange={handleTitle}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="post-desc" onChange={handlePostDesc}>
                    <Form.Label>Post Description</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="content" onChange={handleContent}>
                    <Form.Label>Main Content</Form.Label>
                    <Form.Control as="textarea"/>
                </Form.Group>
                <Form.Group className="date" onChange={handleDate}>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>
                <Form.Select className="type" onChange={handleType}>
                    <Form.Label>Type of Post</Form.Label>
                    <option value="Project">Project</option>
                    <option value="Seminar">Seminar</option>
                </Form.Select>
                <Form.Group onChange={handleImageList}>
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