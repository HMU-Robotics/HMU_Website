import axios from "axios";
import React , { Component } from "react"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"

function Dashboard () {

    const navigate = useNavigate();
    const api_url = "https://robotics-club.hmu.gr:443/api/dashboard/test"

    const gotoCreatePost = () => {
        navigate("/createpost")
    }

    const gotoEditPost = () => {
        navigate("/editpost")
    }

    const gotoCreateUser = () => {
        navigate("/createuser")
    }

    const gotoEditUser = () => {
        navigate("/edituser")
    }

    // test remove after
    const doTest = async(e) => {
        await axios.post(api_url, {
            'email': "testemail"
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
                <h3>Create User</h3>
                <Button onClick={gotoCreateUser} variant="primary">Button</Button>
            </div>
            <div className="wrapper">
                <h3>Edit User</h3>
                <Button onClick={gotoEditUser} variant="primary">Button</Button>
            </div>
            <div className="wrapper">
                <h3>Test</h3>
                <Button onClick={doTest} variant="primary">Button</Button>
            </div>
        </>
    )
}

export default Dashboard