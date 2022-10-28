import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useFindUser() {
   const [user, setUser] = useState(null);
   
   const api_login = 'http://localhost:4000/api/auth/checkSession'

useEffect(() => {
   async function findUser() {
     await axios.post(api_login)
        .then(res => {
        setUser(res.data.member_id);
     }). catch(err => {
      console.log(err)
    });
  }
   findUser();
}, []);
return {
   user,
   setUser
   }
}