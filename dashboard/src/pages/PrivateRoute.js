import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes(props) {

   const user = props.user

   const passRender = ()=>{
      if(user === null){
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