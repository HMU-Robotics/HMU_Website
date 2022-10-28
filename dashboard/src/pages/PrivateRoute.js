import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserConsumer } from './../hooks/UserContext';

export default function PrivateRoutes() {

   return(
      <div>
         <UserConsumer>
            {(props)=>{
               return props.user ? <Outlet/> : <Navigate to={"/"}/>
            }}
         </UserConsumer>
      </div>
   )
}