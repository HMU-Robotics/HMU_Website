import React, { useState, useEffect } from "react";
import './Posts.css'


function Posts(props, {match} ) {

    console.log(props.match);

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();


    // useEffect(() => {
    //     fetch(`api/page/for/post`, {})
    //       .then((res) => res.json())
    //       .then((response) => {
    //         setData(response);
    //         setIsLoading(false);
    //         console.log(`api/page/for/post`);
    //       })
    //       .catch((error) => console.log(error));
    //   }, []);


    return(  // needs to be sanitized vs xss scripts
        <div>

                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam quam nulla porttitor. Est sit amet facilisis magna etiam tempor orci eu lobortis. Netus et malesuada fames ac turpis egestas maecenas. Libero enim sed faucibus turpis in eu mi. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Odio ut sem nulla pharetra diam sit amet. Cras adipiscing enim eu turpis. A diam maecenas sed enim ut sem. Vulputate ut pharetra sit amet aliquam id. Eros donec ac odio tempor. Augue lacus viverra vitae congue eu consequat ac felis. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Felis eget velit aliquet sagittis id. Arcu non odio euismod lacinia at quis risus sed vulputate. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Non tellus orci ac auctor augue mauris augue. Diam vel quam elementum pulvinar etiam non quam.

Leo urna molestie at elementum eu facilisis sed odio morbi. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Felis bibendum ut tristique et egestas quis. Orci porta non pulvinar neque laoreet suspendisse interdum. Justo donec enim diam vulputate ut pharetra sit. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Quam pellentesque nec nam aliquam sem et tortor. Odio euismod lacinia at quis risus. Nunc sed velit dignissim sodales ut eu sem integer. Vitae nunc sed velit dignissim sodales ut eu sem. Vel eros donec ac odio tempor orci dapibus. Bibendum neque egestas congue quisque egestas diam in arcu. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Mauris ultrices eros in cursus turpis massa. Sit amet venenatis urna cursus eget nunc scelerisque viverra. Rutrum quisque non tellus orci ac auctor. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Sit amet justo donec enim diam. Lacus viverra vitae congue eu consequat ac felis. Eu tincidunt tortor aliquam nulla.</p>
                
        </div>
    );
}

export default Posts;