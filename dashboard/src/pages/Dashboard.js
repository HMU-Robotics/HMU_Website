import React , { Component } from "react"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"

function Dashboard () {

    const navigate = useNavigate();

    const gotoCreatePost = () => {
        navigate("/createpost")
    }

    const gotoEditPost = () => {
        navigate("/editpost")
    }

    const gotoCreateMember = () => {
        navigate("/createmember")
    }

    const gotoEditMember = () => {
        navigate("/editmember")
    }

    const gotoAddSponsor = () => {
        navigate("/addsponsor");
    }


    return(
        <>
            <h1>Dashboard</h1>
            <div className="wraper">
                <h3>Create Post</h3>
                <Button onClick={gotoCreatePost} variant="primary">Button</Button>
            </div>
            <div className="wrapper">
                <h3>Edit Post</h3>
                <Button onClick={gotoEditPost} variant="primary">Button</Button>
            </div>
            <div className="wrapper">
                <h3>Create Member</h3>
                <Button onClick={gotoCreateMember} variant="primary">Button</Button>
            </div>
            <div className="wrapper">
                <h3>Edit Member</h3>
                <Button onClick={gotoEditMember} variant="primary">Button</Button>
            </div>
            <div className="wrapper">
                <h3>Add Sponsor</h3>
                <Button onClick={gotoAddSponsor} variant="primary">Button</Button>
            </div>
        </>
    )
}

export default Dashboard