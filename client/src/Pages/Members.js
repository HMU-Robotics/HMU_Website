import React , { Component } from "react"
import MemberGrid from "../components/MemberGrid"
import './Members.css'
import TableMembers from '../components/TableMembers'
import Divider from "../components/Divider"


class Members extends Component{
    render(){
        return(
        <div className="member-page">

            <div className="member-start">Η Λέσχη Ρομποτικής του ΕΛΜΕΠΑ αναζητά μέλη πρόθυμα να καλλιεργήσουν νέες δεξιότητες, να συμμετάσχουν στα επόμενα σχέδια της ομάδας μας και να προσφέρουν γνώσεις στις επόμενες γενιές σπουδαστών.
                Το πεδίο δραστηριότητας των ομάδων μας έχει μεγάλο εύρος καλύπτοντας τους περισσότερους κλάδους που απαρτίζουν τη Ρομποτική, ενδεικτικά:
            </div>

            
            <TableMembers/>

            <p className="member_social">Προώθηση και Social Media Social Media managment Γραφιστικά Λήψη Βίντεο/Φωτογραφιών</p>


            <div className="member_con">
                <p class="teams">Οι ομάδες μας έχουν τη δυνατότητα να ασχοληθούν με: Ρομποτικούς Βραχίονες, Οχήματα εδάφους, Ηλεκτρονικά, Μικροελεγτές και Προγραμματισμό (σε πλήθος γλωσσών και framework) και πολλά ακόμα.</p>
            </div>

            <div className="member_img">
                    <a className="member_img_1" href="https://discord.gg/xHmZ8684c2" target="_blank" rel="noopener noreferrer"><p>Join Discord</p><svg id='member_img' xmlns="http://www.w3.org/2000/svg" width="100" height="70" fill="#4169e1" class="bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/></svg></a>
                    <a className="member_img_2" href="https://eclass.hmu.gr/courses/MECH227/" target="_blank" rel="noopener noreferrer"><p>Join Eclass</p><img id='member_img' src="Logos/HMULogo.png" alt="HMULogo"></img></a>
                </div>
            <Divider/>

            <MemberGrid/>

        </div>
        )
    }
}

export default Members