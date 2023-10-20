import React, {useContext} from "react";
import LanguageContext from "../hooks/LanguageContext";
import "./About.css";

function About() {

  const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSe5IbOJ_oVSadgP7PxPXeg-NXbUVIOtFxJoxzkjj9UGWx-Cng/viewform?usp=sf_link"

  const {language, setLanguage} = useContext(LanguageContext);
  
  const handleButtonClick = () => {
    window.open(formLink)
}

  // Greek
  if(language === "greek"){
    return (
      <div className="about-container">
        <div className="about-section">
          <div className="about-image">
            <img src="./Media/team.jpg" alt="About" />
          </div>
          <div className="about-content">
            <h2 className="about-heading">Welcome to our Team</h2>
            <p className="about-text">
            Η Λέσχη Ρομποτικής του ΕΛΜΕΠΑ είναι μια φοιτητική ομάδα που δίνει στα μέλη της την ευκαιρία να γνωρίσουν τους κλάδους που απαρτίζουν τη Ρομποτική. Μέσω workshop, project και διαγωνισμών, τα μέλη μας διευρύνουν τις γνώσεις του πάνω στη Ρομποτική, αλληλεπιδρώντας ταυτόχρονα με συμφοιτητές του που μοιράζονται το ίδιο πάθος με αυτούς.          
            </p>
            <button onClick={handleButtonClick} className="join-us-button">Εγγραφή</button>
          </div>
        </div>
        <div className="about-section about-section-2">
          <div className="about-content">
            <h2 className="about-heading">Our Activities</h2>
            <p className="about-text">
            Στη Λέσχη Ρομποτικής του ΕΛΜΕΠΑ, σκοπός μας είναι ο κάθε φοιτητής να βρει τον τομέα που τον εκφράζει και να χτίσει σιγά σιγά τις απαραίτητες γνώσεις πάνω σε αυτόν. Για το λόγο αυτό διενεργούνται σεμινάρια, ώστε όλοι να μπορούν να πάρουν μια γεύση από κάθε πτυχή που σχηματίζει τον φανταστικό αυτό κόσμο της Ρομποτικής και να μπορέσουν να εντρυφήσουν σε αυτόν. Τα σεμινάρια οργανώνονται και πραγματοποιούνται από προπτυχιακούς φοιτητές μέχρι και καθηγητές, μεταλαμπαδεύοντας τις γνώσεις τους στα μέλη της Λέσχης Ρομποτικής δημιουργώντας μια συνέχεια στην προσπάθεια μας.          </p>
          </div>
          <div className="about-image">
            <img src="./Media/arduino.jpg" alt="Expertise" />
          </div>
        </div>
      </div>
    );
  }

  // English
  else if(language === "english"){
    return(
      <div className="about-container">
        <div className="about-section">
          <div className="about-image">
            <img src="./Media/team.jpg" alt="About" />
          </div>
          <div className="about-content">
            <h2 className="about-heading">Welcome to our Team</h2>
            <p className="about-text">
            The HMU Robotics Club is a student group that gives its members the opportunity to get to know the branches that make up Robotics. Through workshops, projects and competitions, our members expand their knowledge on Robotics, while interacting with fellow students who share the same passion as them.
            </p>
            <button onClick={handleButtonClick} className="join-us-button">Join us!</button>
          </div>
        </div>
        <div className="about-section about-section-2">
          <div className="about-content">
            <h2 className="about-heading">Our Activities</h2>
            <p className="about-text">
            At HMU's Robotics Club, our goal is for each student to find the field that expresses them and for them to slowly build the necessary knowledge on it. For this reason, seminars are held so that everyone can get a taste of every aspect that makes up the fantastic world of Robotics and be able to immerse themselves in it. The seminars are organized and carried out by our undergraduate students and even professors, passing on their knowledge to the members of the Robotics Club, creating a continuity in our effort.</p>
          </div>
          <div className="about-image">
            <img src="./Media/arduino.jpg" alt="Expertise" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
