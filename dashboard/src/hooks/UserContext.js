import React,{createContext, useState, useEffect} from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

 const UserContext = createContext()

 const UserProvider = (props)=>{
    const [user , setUser] = useState(9999)
   
   const api_login = 'http://localhost:4000/api/auth/checkSession'

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
        <UserContext.Provider value={user} >
          {props.children}
        </UserContext.Provider>
      )
}

export{
    UserContext,
    UserProvider
}