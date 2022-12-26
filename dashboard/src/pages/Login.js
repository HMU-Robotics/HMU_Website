import axios from "axios";
import React , { Component, useState ,useContext } from "react"
import { Navigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const httpsAgent = new https.Agent({
    rejectUnauthorized: false
})


function Login (){
        const api_login = "https://robotics-club.hmu.gr:443/api/auth/AdminLogin"
        const [password , setPassword] = useState(null)
        const [email , setEmail] = useState(null)
        const handleEmail = (e)=>{
            setEmail(e.target.value)
        }

        const handlePassword = (e)=>{
            setPassword(e.target.value)
        }

        const validateForm = () =>{
            if(password && email) return false
            else return true
        }

        const handleSubmit= async (e) => {
            e.preventDefault()
            await axios.post(api_login,{
                'email':email,
                'password':password
            })
            .then((res)=>{
                console.log(res)
                console.log(res.status)
                return <Navigate to={"/dashboard"}/>
            })
            .catch((err)=>{
                console.log(err)
            })
          }

        return(
            <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={validateForm()} >
                Submit
                </Button>
            </Form>
        );
    }

export default Login