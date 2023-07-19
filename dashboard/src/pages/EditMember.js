import React , { useState, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"



function EditMember (){

    const [memberData, setMemberData] = useState([]);
    const [language, setLanguage] = useState("english");
    const navigate = useNavigate();
    const memberLanguage = language === "english" ? "en" : "gr";



    const gotoMember = (academic_id) => {
        navigate(`/member/${academic_id}/${memberLanguage}`);
    }

    const handleLanguage = (e) => {
        setLanguage(e.target.value);
    }

    const deleteMember = async(academic_id) => {
        await axios.delete(`https://robotics-club.hmu.gr:443/api/dashboard/deleteMember/${academic_id}`)
        .then(response => {
            console.log("Member deleted succesfully");
        })
        .catch(error => {
            console.error("Error deleting Member: ",error);
        })
    }


    // useEffect to fetch all available members
    useEffect(() => {
        fetch(`https://robotics-club.hmu.gr:443/api/members/find/all/${memberLanguage}`, {})
          .then((res) => res.json())
          .then((response) => {
            setMemberData(response);
            console.log(`https://robotics-club.hmu.gr:443/api/members/find/all/${memberLanguage}`);
            console.log(response)
          })
          .catch((error) => {
            console.log(error);
        })
      }, [language]);

    return(
        <div>
            <h1 className="d-flex justify-content-center">Edit Members Page</h1>
            <div>
                <h2>Select language</h2>
                <select onChange={handleLanguage}>
                    <option value="english">English</option>
                    <option value="greek">Greek</option>
                </select>
            </div>
            <h2>List of Members</h2>
            <hr/>

            {memberData && memberData.Item ? (
                <>
                    {memberData.Item.map((member, i) => (
                        <>
                        <div className="d-flex justify-content-between" key={i}>
                            <p>{member.first_name}</p>
                            <p>{member.last_name}</p>
                            <p>{member.academic_id}</p>
                            <div className="d-flex justify-content-end">
                                <Button variant="primary" onClick={() => gotoMember(member.academic_id)}>Update Member</Button>
                                <Button variant="danger" onClick={() => deleteMember(member.academic_id)}>Delete Member</Button>
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

export default EditMember