import React,{useContext} from "react"
import "./Eurobot.css"
import LanguageContext from '../hooks/LanguageContext';
import MemberGridEuro from "../components/MemberGridEuro";

function Eurobot(){

        const {language, setLanguage} = useContext(LanguageContext);

        if(language == "greek"){
                    return(
        <div className="euro-page">
            <div className="about-section eurobot-hero">
                <div className="about-image eurobot-image-hero">
                    <img src="./eurobot/eurobot.png" alt="About" />
                </div>
                    <div className="about-content eurobot-hero-text-area">
                        <h2 className="about-heading eurobot-hero-title">Welcome to our Team</h2>
                        <p className="about-text eurobot-hero-text">lorem*2</p>
                        <button className="about-button eurobot-hero-btn" ><a href="https://www.eurobot.org/" className="eurobot-hero-btn">Eurobot</a></button>
                    </div>
                </div>
            <div className="about-container eurobot-container">
                <div className="about-section eurobot-about">
                    <div className="about-image">
                        <img src="./eurobot/1.png" alt="About" />
                    </div>
                <div className="about-content">
                    <h2 className="about-heading">Title</h2>
                    <p className="about-text">text</p></div>
                </div>
                <div className="about-section about-section-2 eurobot-about">
                    <div className="about-content ">
                        <h2 className="about-heading">Title</h2>
                        <p className="about-text">test</p>
                    </div>
                    <div className="about-image">
                            <img src="./eurobot/logo.png" alt="Expertise" />
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