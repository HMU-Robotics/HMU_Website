import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

export default function PrivateRoutes() {

   const [user , setUser] = useContext(UserContext)
   return(
      <div>
            {console.log(user)}
            {user ? <Outlet/> : <Navigate to={"/"}/>}
      </div>
   )
}