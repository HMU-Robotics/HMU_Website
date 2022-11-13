import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes(props) {

   const user = props.user

   const [isLoading, setIsLoading] = useState(true);
   const [component, setComponent] = useState(null);

   const passRender = ()=>{
      if(user === null){
         return <Navigate to={"/"}/>
      }else{
         return <Outlet/>
      }
   }

   useEffect(() => {
      if(isLoading) {
         const loadedComponent = () => {
            setComponent(<div>Loading ...</div>)
         }
         setIsLoading(false);
      }
      else if(!isLoading) {
         const loadedComponent = () => {
            setComponent(passRender);
         }
      }
   }, [isLoading]);

      return(
         <div>
               {console.log(user)}
               {component}
         </div>
      )
}