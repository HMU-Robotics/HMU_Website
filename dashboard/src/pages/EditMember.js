import React , { useState, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"
import { useNavigate } from "react-router-dom"
import axios from "axios"



function EditMember (){

    const [memberData, setMemberData] = useState([]);
    const navigate = useNavigate();



    const gotoMember = (academic_id) => {
        navigate(`/member/${academic_id}`);
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
        fetch(`https://robotics-club.hmu.gr:443/api/members/find/all`, {})
          .then((res) => res.json())
          .then((response) => {
            setMemberData(response);
            console.log(`https://robotics-club.hmu.gr:443/api/members/find/all`);
            console.log(response)
          })
          .catch((error) => {
            console.log(error);
        })
      }, []);

    return(
        <div>
            <h1 className="d-flex justify-content-center">Edit Members Page</h1>

            <h2>List of Members</h2>
            <hr/>

            {memberData && memberData.Item ? (
                <>
                    {memberData.Item.map((member, i) => (
                        <>
                        <div className="d-flex justify-content-between" key={i}>
                            <p>{member.fullname_gr}</p>
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