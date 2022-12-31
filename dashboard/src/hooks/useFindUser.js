import { useState, useEffect } from 'react';
import axios from 'axios';
export default function useFindUser() {
   const [user, setUser] = useState(null);
   
   const api_login = 'https://robotics-club.hmu.gr:443/api/auth/checkSession'

useEffect(() => {
   async function findUser() {
     await axios.post(api_login)
        .then(res => {
        setUser(res.data.member_id);
        console.log(res.data.member_id)
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