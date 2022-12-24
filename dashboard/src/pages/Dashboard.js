import React , { Component } from "react"
import Button from "react-bootstrap/esm/Button"

function Dashboard () {




    return(
        <div>
            <h1>Dashboard</h1>
            <div className="wraper">
                <h3>Create Post</h3>
                <Button variant="primary"/>
            </div>
            <div className="wrapper">
                <h3>Edit Post</h3>
                <Button variant="primary"/>
            </div>
            <div className="wrapper">
                <h3>Create User</h3>
                <Button variant="primary"/>
            </div>
            <div className="wrapper">
                <h3>Edit User</h3>
                <Button variant="primary"/>
            </div>
        </div>
    )
}

export default Dashboard