import React , { useState, useEffect } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"
import axios from "axios"
import SpinnerButton from "../components/SpinnerButton"
import AlertBox from "../components/AlertBox"
import { useParams } from "react-router-dom";



function PostPage() {
    const { postID } = useParams();
    const [postData, setPostData] = useState([]);
    const api_url = `https://robotics-club.hmu.gr:443/api/dashboard/editPost/${postID}`


    const [title, setTitle] = useState("")
    const [postDesc, setPostDesc] = useState("")
    const [content, setContent] = useState("")
    const [date, setDate] = useState()
    const [imageList, setImageList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [buttonState, setButtonState] = useState(<Button variant="primary" type="submit">Submit</Button>);
    const [errorMessage, setErrorMessage] = useState(false);
    const [alertState, setAlertState] = useState(null);


    // enters previous data into the text boxes of page
    const setStartingData = (post) => {
        setTitle(post.title);
        setContent(post.content);
        setDate(post.date);
    }
    
    
    
    // useEffect for post data
    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/posts/${postID}`, {})
            .then((res) => res.json())
            .then((response) => {
                setPostData(response);
                setStartingData(postData.post);
                console.log(`https://robotics-club.hmu.gr:443/api/posts/${postID}`);
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


    const handleImageList = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        setImageList([...imageList, ...files]);
      }      


    const handleSubmit = async (e) => {

        // checks when button is pressed so it sets state to loading
        setIsLoading(true);

        e.preventDefault()

        const formData = new FormData()
        formData.append("title",title)
        formData.append("content",content)
        formData.append("post_desc",postDesc)
        formData.append("created_at",date)

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
            <h1 className="d-flex justify-content-center">Update Post</h1>
            
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
                <Form.Group onChange={handleImageList}>
                    <Form.Label>Add Images</Form.Label>
                    <Form.Control type="file" multiple/>
                </Form.Group>
                {buttonState}
                {alertState}
            </Form>
        </>
    )

}

export default PostPage;