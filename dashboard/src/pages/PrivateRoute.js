import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes(props) {

   const [user, setUser] = useState(props.user);
   const [loading, setLoading] = useState(<div>Loading ...</div>);

   const passRender = () =>{
      if(props.user === null){
         return <Navigate to={"/"}/>
      }else{
         return <Outlet/>;
      }
   }

   useEffect(() => {

      // idk if its bad but probably should be removed from live
      
      if(window.location.hostname === "localhost") {
         setUser(1);
         setLoading(<Outlet/>);
      }


      
      else if(props.user) {
         setUser(props.user)
         setLoading(passRender())
      }
      else {
         setLoading(<div>Error</div>)
      }
   }, [props, user]);

      return(
         <div>
               {console.log(props)}
               {console.log(user)}
               {loading}
         </div>
      )
}
