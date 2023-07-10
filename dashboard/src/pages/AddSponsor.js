import React , { useState, useEffect } from "react"
import  Form  from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button"
import axios from "axios"
import SpinnerButton from "../components/SpinnerButton"


function AddSponsor () {

    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/addMember"
    const [sponsorName, setSponsorName] = useState("");
    const [sponsorDesc, setSponsorDesc] = useState("");
    const [sponsorTier, setSponsorTier] = useState("bronze");
    const [sponsorImage, setSponsorImage] = useState("");


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
        })
        .catch((err) => {
            console.log(err)
        })
    }

    
    return(
        <>
            <h1>Add New Sponsor</h1>

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
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    <option value="platinum">Platinum</option>
                </Form.Select>
                <Form.Group className="sponsorImage" onChange={handleSponsorImage}>
                    <Form.Label>Sponsor Image</Form.Label>
                    <Form.Control type="file"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )

}

export default AddSponsor