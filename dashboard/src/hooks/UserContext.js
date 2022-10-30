import React,{createContext, useState, useEffect} from 'react'
import axios from 'axios'

 const UserContext = createContext()
 const UserProvider = (props)=>{
    const [user , setUser] = useState(null)
   
   const api_login = 'http://localhost:4000/api/auth/checkSession'

useEffect(() => {
   async function findUser() {
     await axios.post(api_login)
        .then((res) => {
        setUser(res.data.member_id);
        console.log(res.data)
        console.log(res.data.member_id)
        })
        .catch((err) => {
      console.log(err)
    });
  }
   findUser();
}, []);

    return (
        <UserContext.Provider value={[user, setUser]} >
          {props.children}
        </UserContext.Provider>
      )
}

export{
    UserContext,
    UserProvider
}