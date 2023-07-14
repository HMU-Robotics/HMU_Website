import React , { useState, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"



function EditPost (){

    const [postData, setPostData] = useState([]);
    const navigate = useNavigate();


    const gotoPost = (id) => {
        navigate(`/post/${id}`);
    }


    // useEffect to fetch all posts
    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/posts/find/all`, {})
          .then((res) => res.json())
          .then((response) => {
            setPostData(response);
            console.log(`https://robotics-club.hmu.gr:443/api/posts/find/all`);
            console.log(response)
          })
          .catch((error) => {
            console.log(error);
        })
      }, []);
    
    return(
        <div>
            <h1 className="d-flex justify-content-center">Edit Posts Page</h1>
            <div className="d-flex justify-content-between">
                <h2>Posts</h2>
                <h3>Title</h3>
                <h3>Description</h3>
                <h3>Created</h3>
                <h3>Updated</h3>
                <h3></h3>
            </div>
            <hr/>

            {postData && postData.Item ? (
                <>
                    {postData.Item.map((post, i) => (
                        <>
                        <div className="d-flex justify-content-between" key={i}>
                            <p>{post.title}</p>
                            <p className="char-limit">{post.post_desc}</p>
                            <p>{post.created_at}</p>
                            <p>{post.updated_at}</p>
                            <div className="d-flex justify-content-end">
                                <Button variant="primary" onClick={() => gotoPost(post.id)}>Update Post</Button>
                            </div>
                        </div>
                        <hr/>
                        </>
                    ))}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default EditPost;