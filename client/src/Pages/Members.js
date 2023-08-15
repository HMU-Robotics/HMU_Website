import React , { useContext } from "react"
import MemberGrid from "../components/MemberGrid"
import './Members.css'
import Divider from "../components/Divider"
import LanguageContext from "../hooks/LanguageContext";



function Members() {

    const {language, setLanguage} = useContext(LanguageContext);


    // Greek
    if(language === "greek"){
        return(
        <div className="member-page">

            <div className="member-start">Η Λέσχη Ρομποτικής του ΕΛΜΕΠΑ αναζητά μέλη πρόθυμα να καλλιεργήσουν νέες δεξιότητες, να συμμετάσχουν στα επόμενα σχέδια της ομάδας μας και να προσφέρουν γνώσεις στις επόμενες γενιές σπουδαστών. Το πεδίο δραστηριότητας της ομάδας μας έχει μεγάλο εύρος καλύπτοντας όλους τους κλάδους της μηχανικής που απαρτίζουν τη Ρομποτική. 
Αν θες και εσύ να γίνεις και εσύ μέλος της ομάδας, μπορείς να επικοινωνήσεις μαζί μας μέσω social media ή email.
            </div>

            

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
    
                <div className="member-start">HMU Robotics Club is looking for members willing to cultivate new skills, participate in our team's next projects and provide knowledge to the next generations of students. The scope of our team's activities are wide-ranging, covering all engineering branches that make up Robotics. If you also want to become a member of the team, you can contact us via social media or email.  </div>
    
                    
    
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