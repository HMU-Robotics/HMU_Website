import React,{useContext} from "react"
import "./Eurobot.css"
import LanguageContext from '../hooks/LanguageContext';
import MemberGridEuro from "../components/MemberGridEuro";

function Eurobot(){

        const {language, setLanguage} = useContext(LanguageContext);

        const text_gr = {
            text_hero:"Με χαρά σας ανακοινώνουμε ότι η ομάδα μας θα πάρει μέρος στον διαγωνισμό Eurobot 2024",
            text_hero_2:"Αυτήν την στιγμή βρισκόμαστε στην version 2.0 του ρομπότ, σκοπός της οποίας είναι να λειτουργήσει ως μία πλατφόρμα στην οποία πάνω θα δοκιμαστούν η κίνηση του ρομπότ, η ανίχνευση και αποφυγή εμποδίων(με χρήση lidar) καθώς και ο εντοπισμός του ρομπότ στον χώρο (localization) με την χρήση κάμερας(opencv + ArUco)",
            text_eurobots:"Eurobot ονομάζεται ο διεθνής διαγωνισμός ρομποτικής που διεξάγεται ετησίως τα τελευταία είκοσι πέντε χρόνια στη Γαλλία, με συμμετέχοντες από όλο τον κόσμο. Ο διαγωνισμός κάθε χρόνο έχει διαφορετική θεματική, κανόνες και αποστολές, καθιστώντας τον εξαιρετικά ενδιαφέρον αλλά και απαιτητικό. Οι συμμετέχοντες ομάδες μελετούν, σχεδιάζουν, κατασκευάζουν και προγραμματίζουν ρομπότ τα οποία ανταγωνίζονται σε ένα παιχνίδι με συγκεκριμένους κανόνες.",
            text_eurobots_2:"Οι ομάδες καλούνται να αντιμετωπίσουν προκλήσεις όπως είναι η επικοινωνία μεταξύ των ρομπότ, την αυτόνομη κίνηση τους εντός του αγωνιστικού χώρου και την υλοποίηση αποδοτικών αυτοματισμών εκτέλεσης των δοκιμασιών.",
            text_theme:'Το θέμα του φετινού διαγωνισμού ονομάζεται *"Farming Mars"*. Οι ομάδες καλούνται να σχεδιάσουν δύο τύπους αυτόνομων ρομπότ τα οποία θα εκτελούν διαφορετικές αποστολές.',
            text_theme_2:'Το "μεγάλο" ρομπότ που θα μαζεύει από την πίστα φυτά, θα τα "μεταφυτεύει" σε γλαστράκια και θα τα παραδίδει σε συγκεκριμένες περιοχές ανάλογα με το είδος τους καθώς και άλλες δευτερεύων εργασίες,Και κάποια μικρά ρομπότ τα οποία θα πρέπει μέσα σε 10 δευτερόλεπτα να τρέξουν να φτάσουν τις περιοχές που έχει αφήσει το μεγάλο ρομπότ φυτά ώστε να μαζέψει έξτρα πόντους η ομάδα.'
        }

        const text_eng = {
            text_hero:"We are pleased to announce that our team will take part in the Eurobot 2024",
            text_hero_2:"We are currently in version 2.0 of the robot, the purpose of which is to function as a platform on which to test the movement of the robot, the detection and avoidance of obstacles (using lidar) as well as the localization of the robot in space using a camera (opencv + ArUco)",
            text_eurobots:"Eurobot is the name of the international robotics competition that has been held annually for the past twenty-five years in France, with participants from all over the world. The competition each year has a different theme, rules and missions, making it extremely interesting but also challenging. Participating teams study, design, build and program robots that compete in a game with specific rules.",
            text_eurobots_2:"The teams are asked to face challenges such as the communication between the robots, their autonomous movement within the playing field and the implementation of efficient automation of the execution of the tests.",
            text_theme:"The theme of this year's competition is called 'Farming Mars'. Teams are asked to design two types of autonomous robots that will perform different missions.",
            text_theme_2:'The "big" robot that will pick up plants from the track, "transplant" them into pots and deliver them to certain areas according to their species as well as other secondary tasks, And some small robots that should within 10 seconds run to reach the areas left by the big robot plants to collect extra points for the team.'
        }


        if(language === "greek"){
                    return(
        <div className="euro-page">
            <div className="about-section eurobot-hero">
                <div className="about-image eurobot-image-hero">
                    <img src="/Eurobot/robot.png" alt="About" />
                </div>
                    <div className="about-content eurobot-hero-text-area">
                        <h2 className="about-heading eurobot-hero-title">Συμμετοχή 2024</h2>
                        <p className="about-text eurobot-hero-text">{text_gr.text_hero}</p>
                        <p className="about-text eurobot-hero-text">{text_gr.text_hero_2}</p>
                        <button className="about-button eurobot-hero-btn" ><a href="https://www.eurobot.org/" className="eurobot-hero-btn">Eurobot</a></button>
                    </div>
                </div>
            <div className="about-container eurobot-container">
                <div className="about-section eurobot-about eurobot-left">
                    <div className="about-image eurobots-imgs">
                        <img src="/eurobot/eurobot.png" alt="About" />
                    </div>
                <div className="about-content">
                    <h2 className="about-heading eurobot-heading">Τι είναι το Eurobot;</h2>
                    <p className="about-text">{text_gr.text_eurobots}</p>
                    <p className="about-text">{text_gr.text_eurobots_2}</p>
                    </div>
                </div>
                <div className="about-section about-section-2 eurobot-about eurobot-right">
                    <div className="about-content ">
                    <h2 className="about-heading eurobot-heading">Θέμα 2024</h2>
                        <p className="about-text">{text_gr.text_theme}</p>
                        <p className="about-text">{text_gr.text_theme_2}</p>
                    </div>
                    <div className="about-image eurobots-imgs">
                            <img src="/eurobot/logo.png" alt="Expertise" />
                    </div>  
                </div>
            </div>
            <div className="eurobot-members">
                <div className="eubots-members-container">
                    <MemberGridEuro />
                </div>
            </div>
        </div>    
            )
        }
        else if(language ==="english"){
            return(
                <div className="euro-page">
                    <div className="about-section eurobot-hero">
                        <div className="about-image eurobot-image-hero">

                            <img src="/Eurobot/robot.png" alt="About" className="eurobot-image-h"/>

                        </div>
                            <div className="about-content eurobot-hero-text-area">
                                <h2 className="about-heading eurobot-hero-title">Eurobots 2024</h2>
                                <p className="about-text eurobot-hero-text">{text_eng.text_hero}</p>
                                <p className="about-text eurobot-hero-text">{text_eng.text_hero_2}</p>
                                <button className="about-button eurobot-hero-btn" ><a href="https://www.eurobot.org/" className="eurobot-hero-btn">Eurobot</a></button>
                            </div>
                        </div>
                    <div className="about-container eurobot-container">
                        <div className="about-section eurobot-about eurobot-left">
                            <div className="about-image eurobots-imgs">
                                <img src="/eurobot/eurobot.png" alt="About" />
                            </div>
                        <div className="about-content">
                                <h2 className="about-heading eurobot-heading">What is Eurobot?</h2>
                                <p className="about-text">{text_eng.text_eurobots}</p>
                                <p className="about-text">{text_eng.text_eurobots_2}</p>
                            </div>
                        </div>
                        <div className="about-section about-section-2 eurobot-about eurobot-right">
                            <div className="about-content ">
                            <h2 className="about-heading eurobot-heading">Theme of 2024</h2>
                                <p className="about-text">{text_eng.text_theme}</p>
                                <p className="about-text">{text_eng.text_theme_2}</p>
                            </div>
                            <div className="about-image eurobots-imgs">
                                    <img src="/eurobot/logo.png" alt="Expertise" />
                            </div>  
                        </div>
                    </div>
                    <div className="eurobot-members">
                        <div className="eubots-members-container">
                            <MemberGridEuro />
                        </div>
                    </div>
                </div>    
                    )
        }
}

export default Eurobot