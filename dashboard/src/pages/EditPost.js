import React , { useState, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"



function EditPost (){

    const [postData, setPostData] = useState([]);
    const [language, setLanguage] = useState("english");
    const navigate = useNavigate();
    const postLanguage = language === "english" ? "en" : "gr";


    const gotoPost = (id) => {
        navigate(`/post/${id}/${postLanguage}`);
    }

    const deletePost = async(id) => {
        await axios.delete(`https://robotics-club.hmu.gr:443/api/dashboard/deletePost/${id}`)
        .then(response => {
            console.log("Post deleted succesfully");
        })
        .catch(error => {
            console.error("Error deleting post: ",error);
        })
    }

    const handleLanguage = (e) => {
        setLanguage(e.target.value);
        console.log(postLanguage)
    }


    // useEffect to fetch posts of selected language
    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/posts/find/all/${postLanguage}`, {})
          .then((res) => res.json())
          .then((response) => {
            setPostData(response);
            console.log(`https://robotics-club.hmu.gr:443/api/posts/find/all/${postLanguage}`);
            console.log(response)
          })
          .catch((error) => {
            console.log(error);
        })
      }, [language]);
    
    return(
        <div>
            <h1 className="d-flex justify-content-center">Edit Posts Page</h1>
            <div>
                <h2>Select language</h2>
                <select onChange={handleLanguage}>
                    <option value="english">English</option>
                    <option value="greek">Greek</option>
                </select>
            </div>
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
                                <Button variant="danger" onClick={() => deletePost(post.id)}>Delete Post</Button>
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