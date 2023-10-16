import React , { useState, useEffect } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"
import axios from "axios"
import SpinnerButton from "../components/SpinnerButton"
import AlertBox from "../components/AlertBox"
import SuccessBox from "../components/SuccessBox"



function CreateSponsor () {

    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addSponsor"
    const [sponsorName, setSponsorName] = useState("");
    const [sponsorDesc, setSponsorDesc] = useState("");
    const [sponsorTier, setSponsorTier] = useState("silver");
    const [sponsorImage, setSponsorImage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [buttonState, setButtonState] = useState(<Button variant="primary" type="submit">Submit</Button>);
    const [errorMessage, setErrorMessage] = useState(false);
    const [alertState, setAlertState] = useState(null);
    const [successState, setSuccessState] = useState(SuccessBox("Sponsor"));
    const [successMessage, setSuccessMessage] = useState(false);

    // useEffect for loading button
    useEffect(() => {
        if(isLoading === false) {
            setButtonState(<Button variant="primary" type="submit">Submit</Button>);
        }
        else {
            setButtonState(SpinnerButton);
        }
    }, [isLoading]);

    
    //useEffect for alert box
    useEffect(() => {
        if(errorMessage === true) {
            setButtonState(null);
            setAlertState(AlertBox("Sponsor"));
        }
        else {
            setAlertState(null);
        }
    }, [errorMessage]);


    // useEffect for Success Box
    useEffect(() => {
        if(successMessage === true) {
            setButtonState(null);
            setAlertState(null);
            setSuccessState(SuccessBox("Post"));
        }
        else if(successMessage === false) {
            setSuccessState(null);
        }
    }, [successMessage]);


    const handleSponsorName = (e) => {
        setSponsorName(e.target.value);
    }

    const handleSponsorDesc = (e) => {
        setSponsorDesc(e.target.value);
    }

    const handleSponsorTier = (e) => {
        setSponsorTier(e.target.value);
    }

    const handleSponsorImage = (e) => {
        const img = e.target.files[0]
        setSponsorImage(img);
    }

    const handleSubmit = async (e) => {

        // checks when button is pressed so it sets state to loading
        setIsLoading(true);

        e.preventDefault();

        const formData = new FormData();
        formData.append("sponsor_name", sponsorName);
        formData.append("sponsor_desc", sponsorDesc);
        formData.append("sponsor_tier", sponsorTier);
        formData.append("sponsor_image", sponsorImage);

        await axios.post(api_url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {
            console.log(res)
            console.log(res.status)
            setErrorMessage(false);
            setSuccessMessage(true);
        })
        .catch((err) => {
            console.log(err)
            setSuccessMessage(false);
            setErrorMessage(true);
        })
        
        setIsLoading(false);
    }

    
    return(
        <>
            <h1 className="d-flex justify-content-center">Add New Sponsor</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Label>Add New Sponsor</Form.Label>
                <Form.Group className="sponsorName" onChange={handleSponsorName}>
                    <Form.Label>Sponsor Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="sponsorDesc" onChange={handleSponsorDesc}>
                    <Form.Label>Sponsor Description</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Label>Sponsor Tier</Form.Label>
                <Form.Select className="sponsorTier" onChange={handleSponsorTier}>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                    <option value="diamond">Diamond</option>
                </Form.Select>
                <Form.Group className="sponsorImage" onChange={handleSponsorImage}>
                    <Form.Label>Sponsor Image</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                {buttonState}
                {successState}
                {alertState}
            </Form>
        </>
    )

}

export default CreateSponsor;