import axios from "axios"
import React , { useEffect, useState } from "react"
import Button from "react-bootstrap/esm/Button"
import Form from "react-bootstrap/Form"
import SpinnerButton from "../components/SpinnerButton"
import AlertBox from "../components/AlertBox"



function AddPostImages() {

    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addPostImages"

    const [options, setOptions] = useState([]);
    const [tag, setTag] = useState("");
    const [imageList, setImageList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [buttonState, setButtonState] = useState(<Button variant="primary" type="submit">Submit</Button>);
    const [errorMessage, setErrorMessage] = useState(false);
    const [alertState, setAlertState] = useState(null);


    // useEffect for fetching all available Post Tags
    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/dashboard/getPostTag`, {})
          .then((res) => res.json())
          .then((response) => {
            setOptions(response);
            console.log(`https://robotics-club.hmu.gr:443/api/dashboard/getPostTag`);
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


    
    const handleTag = (e) => {
        setTag(e.target.value)
    }

    const handleImageList = (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;
        setImageList([...imageList, ...files]);
    }


    const handleSubmit = async (e) => {

        e.preventDefault();

        setIsLoading(true);

        const formData = new FormData();
        
        formData.append("tag", tag);
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
            // window.location.reload();
        })
        .catch((err) => {
            console.log(err)
            setErrorMessage(true);
        })

        setIsLoading(false);
    }


    return (
    <Form onSubmit={handleSubmit}>
        <Form.Label>Select Tag</Form.Label>
        <Form.Select className="tag" onChange={handleTag}>
            <option value="">Select ...</option>
            {options?.Item?.map((option,i) => (
                <option key={i} value={option?.tag}>
                    {option?.tag}
                </option>
            ))}
        </Form.Select>
        <Form.Group onChange={handleImageList}>
            <h3>Add Images</h3>
            <Form.Control type="file" multiple/>
        </Form.Group>
        {buttonState}
        {alertState}
    </Form>
  );

}

export default AddPostImages;