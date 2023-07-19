import React , { useContext } from "react"
import MemberGrid from "../components/MemberGrid"
import './Members.css'
import TableMembers from '../components/TableMembers'
import Divider from "../components/Divider"
import LanguageContext from "../hooks/LanguageContext";



function Members() {

    const {language, setLanguage} = useContext(LanguageContext);


    // Greek
    if(language === "greek"){
        return(
        <div className="member-page">

            <div className="member-start">Η Λέσχη Ρομποτικής του ΕΛΜΕΠΑ αναζητά μέλη πρόθυμα να καλλιεργήσουν νέες δεξιότητες, να συμμετάσχουν στα επόμενα σχέδια της ομάδας μας και να προσφέρουν γνώσεις στις επόμενες γενιές σπουδαστών.
                Το πεδίο δραστηριότητας των ομάδων μας έχει μεγάλο εύρος καλύπτοντας τους περισσότερους κλάδους που απαρτίζουν τη Ρομποτική, ενδεικτικά:
            </div>

            
            <TableMembers/>


            <div className="member_img">
                    <a className="member_img_2" href="https://eclass.hmu.gr/courses/MECH227/" target="_blank" rel="noopener noreferrer"><p>Join Eclass</p><img id='member_img' src="Logos/HMULogo.png" alt="HMULogo"></img></a>
                </div>
            <Divider/>

            <MemberGrid/>

        </div>
        )
    }
    //English
    else if(language === "english"){
        return(
            <div className="member-page">
    
                <div className="member-start">Η Λέσχη Ρομποτικής του ΕΛΜΕΠΑ αναζητά μέλη πρόθυμα να καλλιεργήσουν νέες δεξιότητες, να συμμετάσχουν στα επόμενα σχέδια της ομάδας μας και να προσφέρουν γνώσεις στις επόμενες γενιές σπουδαστών.
                    Το πεδίο δραστηριότητας των ομάδων μας έχει μεγάλο εύρος καλύπτοντας τους περισσότερους κλάδους που απαρτίζουν τη Ρομποτική, ενδεικτικά:
                </div>
    
                
                <TableMembers/>
    
    
                <div className="member_img">
                        <a className="member_img_2" href="https://eclass.hmu.gr/courses/MECH227/" target="_blank" rel="noopener noreferrer"><p>Join Eclass</p><img id='member_img' src="Logos/HMULogo.png" alt="HMULogo"></img></a>
                    </div>
                <Divider/>
    
                <MemberGrid/>
    
            </div>
            )
    }
}

export default Members