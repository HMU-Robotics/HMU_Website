import React,{useContext} from "react"
import "./Eurobot.css"
import LanguageContext from '../hooks/LanguageContext';
import MemberGridEuro from "../components/MemberGridEuro";

function Eurobot(){

        const {language, setLanguage} = useContext(LanguageContext);

        if(language === "greek"){
                    return(
        <div className="euro-page">
            <div className="about-section eurobot-hero">
                <div className="about-image eurobot-image-hero">
                    <img src="/eurobot/robot.jpg" alt="About" />
                </div>
                    <div className="about-content eurobot-hero-text-area">
                        <h2 className="about-heading eurobot-hero-title">Eurobots 2024</h2>
                        <p className="about-text eurobot-hero-text">Με χαρά σας ανακοινώνουμε ότι η ομάδα μας θα πάρει μέρος στον διαγωνισμό Eurobot 2024</p>
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
                    <p className="about-text">Παρότι οι κανόνες του φετινού διαγωνισμού αναμένονται να ανακοινωθούν στο τέλος Σεπτέμβρη, η ομάδα μας έχει ήδη ξεκινήσει από τις αρχές του καλοκαιριού να δουλεύει σε διάφορα συστήματα του ρομπότ.
Αυτήν την στιγμή βρισκόμαστε στην version 2.0 του ρομπότ, σκοπός της οποίας είναι να λειτουργήσει ως μία πλατφόρμα πάνω στην οποία θα δοκιμαστούν η κίνηση του ρομπότ, η ανίχνευση και αποφυγή εμποδίων(με χρήση lidar) καθώς και ο εντοπισμός του ρομπότ στον χώρο (localization) με την χρήση κάμερας(opencv + ArUco).</p></div>
                </div>
                <div className="about-section about-section-2 eurobot-about eurobot-right">
                    <div className="about-content ">
                        <p className="about-text">Eurobot ονομάζεται ο διεθνής διαγωνισμός ρομποτικής που διεξάγεται ετησίως τα τελευταία είκοσι πέντε χρόνια στη Γαλλία, με συμμετέχοντες από όλο τον κόσμο. Ο διαγωνισμός κάθε χρόνο έχει διαφορετική θεματική, κανόνες και αποστολές, καθιστώντας τον εξαιρετικά ενδιαφέρον αλλά και απαιτητικό. 

Οι συμμετέχοντες ομάδες μελετούν, σχεδιάζουν, κατασκευάζουν και προγραμματίζουν μέχρι δύο (2) ρομπότ που ανταγωνίζονται σε ένα παιχνίδι με συγκεκριμένους κανόνες. </p>
                        <p className="about-text">Οι ομάδες καλούνται να αντιμετωπίσουν προκλήσεις όπως είναι η επικοινωνία μεταξύ των ρομπότ, την αυτόνομη κίνηση τους εντός του αγωνιστικού χώρου και την υλοποίηση αποδοτικών αυτοματισμών εκτέλεσης των δοκιμασιών (θα ανακοινωθούν το επόμενο διάστημα).</p>
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

                            <img src="/eurobot/robot.jpg" alt="About" className="eurobot-image-h"/>

                        </div>
                            <div className="about-content eurobot-hero-text-area">
                                <h2 className="about-heading eurobot-hero-title">Eurobots 2024</h2>
                                <p className="about-text eurobot-hero-text">We are pleased to announce that our team will take part in the Eurobot 2024 competition</p>
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
                            <p className="about-text">
                            Although the rules of this year's competition are expected to be announced at the end of September, our team has already started working on various systems of the robot since the beginning of the summer.
We are currently in version 2.0 of the robot, the purpose of which is to function as a platform on which to test the movement of the robot, the detection and avoidance of obstacles (using lidar) as well as the localization of the robot in space using a camera (opencv + ArUco).</p></div>
                        </div>
                        <div className="about-section about-section-2 eurobot-about eurobot-right">
                            <div className="about-content ">
                                <p className="about-text ">Eurobot is the name of the international robotics competition that has been held annually for the past twenty-five years in France, with participants from all over the world. The competition each year has a different theme, rules and missions, making it extremely interesting as well as challenging. Participating teams study, design, build and program up to two (2) robots that compete in a game with specific rules.</p>
                                <p className="about-text">The teams are asked to face challenges such as communication between the robots, their autonomous movement within the playing field and the implementation of efficient automation of the execution of the tests (to be announced in the near future).</p>
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