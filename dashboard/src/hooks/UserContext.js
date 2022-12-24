import React,{createContext, useEffect} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

 const UserContext = createContext()

 const UserProvider = (props)=>{
    const {user , setUser} = props
   
   const api_login = 'https://robotics-club.hmu.gr:4000/api/auth/checkSession'

useEffect(() => {
  async function findUser() {
     await axios.post(api_login)
        .then((res) => {
        setUser(res.data.member_id);
        console.log(res.data.member_id)
        })
        .catch((err) => {
      console.log(err)
    });
  }
   findUser();
}, []);

    return (
        <div >
          {props.children}
        </div>
      )
}

export{
    UserContext,
    UserProvider
}