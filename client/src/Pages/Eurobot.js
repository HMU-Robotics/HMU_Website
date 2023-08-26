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
                    <img src="/eurobot/eurobot.png" alt="About" />
                </div>
                    <div className="about-content eurobot-hero-text-area">
                        <h2 className="about-heading eurobot-hero-title">Eurobots 2024</h2>
                        <p className="about-text eurobot-hero-text">Με χαρά σας ανακοινώνουμε ότι η ομάδα μας θα πάρει μέρος στον διαγωνισμό Eurobot 2024</p>
                        <button className="about-button eurobot-hero-btn" ><a href="https://www.eurobot.org/" className="eurobot-hero-btn">Eurobot</a></button>
                    </div>
                </div>
            <div className="about-container eurobot-container">
                <div className="about-section eurobot-about eurobot-left">
                    <div className="about-image">
                        <img src="/eurobot/1.png" alt="About" />
                    </div>
                <div className="about-content">
                    <h2 className="about-heading">Τι είναι το Eurobot;</h2>
                    <p className="about-text">Eurobot ονομάζεται ο διεθνής διαγωνισμός ρομποτικής που διεξάγεται ετησίως τα τελευταία είκοσι πέντε χρόνια στη Γαλλία με συμμετέχοντες από όλο τον κόσμο. Ο διαγωνισμός κάθε χρόνο έχει διαφορετική θεματική, κανόνες και αποστολές, καθιστώντας τον εξαιρετικά ενδιαφέρον αλλά και απαιτητικό. </p></div>
                </div>
                <div className="about-section about-section-2 eurobot-about eurobot-right">
                    <div className="about-content ">
                        <p className="about-text">Οι συμμετέχοντες ομάδες μελετούν, σχεδιάζουν, κατασκευάζουν και προγραμματίζουν μέχρι 2 ρομπότ που ανταγωνίζονται σε ένα παιχνίδι με συγκεκριμένους κανόνες</p>
                        <p className="about-text">Οι ομάδες πρέπει να αντιμετωπίσουν προκλήσεις όπως την επικοινωνία μεταξύ των ρομπότ, την αυτόνομη κίνηση τους εντός της πίστας και την αυτόματη εκτέλεση συγκεκριμένων δοκιμασιών.</p>
                    </div>
                    <div className="about-image">
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
                            <img src="/Eurobot/eurobot.png" alt="About" />
                        </div>
                            <div className="about-content eurobot-hero-text-area">
                                <h2 className="about-heading eurobot-hero-title">Eurobots 2024</h2>
                                <p className="about-text eurobot-hero-text">We are pleased to announce that our team will take part in the Eurobot 2024 competition</p>
                                <button className="about-button eurobot-hero-btn" ><a href="https://www.eurobot.org/" className="eurobot-hero-btn">Eurobot</a></button>
                            </div>
                        </div>
                    <div className="about-container eurobot-container">
                        <div className="about-section eurobot-about eurobot-left">
                            <div className="about-image">
                                <img src="/eurobot/1.png" alt="About" />
                            </div>
                        <div className="about-content ">
                            <h2 className="about-heading">What is Eurobot?</h2>
                            <p className="about-text">
Eurobot is the name of the international robotics competition that has been held annually for the past twenty-five years in France with participants from all over the world. The competition each year has a different theme, rules and missions, making it extremely interesting but also challenging.</p></div>
                        </div>
                        <div className="about-section about-section-2 eurobot-about eurobot-right">
                            <div className="about-content ">
                                <p className="about-text ">
Participating teams study, design, build and program up to 2 robots that compete in a game with specific rules</p>
                                <p className="about-text">Teams must face challenges such as communication between robots, autonomous movement within the track and automatic execution of certain tests.</p>
                            </div>
                            <div className="about-image">
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