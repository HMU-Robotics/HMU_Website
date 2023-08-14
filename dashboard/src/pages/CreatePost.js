import axios from "axios"
import React , { useEffect, useState } from "react"
import Button from "react-bootstrap/esm/Button"
import Form from "react-bootstrap/Form"
import SpinnerButton from "../components/SpinnerButton"
import AlertBox from "../components/AlertBox"
import "./CreatePost.css"


function CreatePost() {


    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addPost"

    const [language, setLanguage] = useState("english")
    const [tag, setTag] = useState("")
    const [title, setTitle] = useState("")
    const [postDesc, setPostDesc] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState(null)
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



    // useEffect for Alert box
    useEffect(() => {
        if(errorMessage === true) {
            setButtonState(null);
            setAlertState(AlertBox("Post"));
        }
        else {
            setAlertState(null);
        }
    }, [errorMessage]);


    const handleLanguage = (e) => {
        setLanguage(e.target.value)
    }

    const handleTag = (e) => {
        setTag(e.target.value)
    }

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



    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!language || !title || !content || !postDesc || !date) {
            // Handle missing or invalid data
            console.log("Missing or invalid data");
            return;
        }

        // checks when button is pressed so it sets state to loading
        setIsLoading(true);


        const formData = new FormData()
        formData.append("language",language)
        formData.append("tag",tag)
        formData.append("title",title)
        formData.append("content",content)
        formData.append("post_desc",postDesc)
        formData.append("created_at",date)


        await axios.post(api_url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {
            console.log(res)
            console.log(res.status)
            setErrorMessage(false);
            // window.location.reload();
        })
        .catch((err) => {
            console.log(err)
            setErrorMessage(true);
        })

        setIsLoading(false);
    }


    return(
        <>
            <h1 className="d-flex justify-content-center">Create New Post</h1>
            
            <Form onSubmit={handleSubmit}>
                <Form.Label>Language</Form.Label>
                <Form.Select className="language" onChange={handleLanguage}>
                    <option value="english">English</option>
                    <option value="greek">Greek</option>
                </Form.Select>
                <Form.Group className="tag" onChange={handleTag}>
                    <Form.Label>Post Tag</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
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
                <div className="space"/>
                {buttonState}
                {alertState}
            </Form>
        </>
    )
}

export default CreatePost