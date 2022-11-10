import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

export default function PrivateRoutes() {

   const user  =useContext(UserContext)

   const passRender = ()=>{
      if(user === 9999){
         return <Navigate to={"/"}/>
      }else{
         return <Outlet/>
      }
   }
   return(
      <div>
            {console.log(user)}
            {passRender()}
      </div>
   )
}