import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes(props) {

   const [user, setUser] = useState(props.user);
   const [loading, setLoading] = useState(<div>Loading ...</div>);

   const passRender = () =>{
      if(user === null){
         return <Navigate to={"/"}/>
      }else{
         return <Outlet/>;
      }
   }

   useEffect(() => {
      if(user === undefined || user === null){
         setUser(props.user);
      }
      if(user != undefined) {
         console.log("if");
         setLoading(passRender());
      }
      else {
         console.log("else");
         setLoading(<div>Error</div>)
      }
   }, [props, user]);

      return(
         <div>
               {console.log(props)}
               {console.log(user)}
               {console.log(loading)}
               {loading}
         </div>
      )
}