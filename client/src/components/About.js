import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-section">
        <div className="about-image">
          <img src="./Media/about.jpg" alt="About" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">Welcome to our Team</h2>
          <p className="about-text">
          Η Λέσχης Ρομποτικής του ΕΛΜΕΠΑ είναι μία ομάδα φοιτητών που έχει ως σκοπό να δώσει στους φοιτητές την ευκαιρία να γνωρίσουν τους κλάδους που σχετίζονται με τη Ρομποτική. Μέσω σεμιναρίων, projects και διαγωνισμών. τα μέλη μας διευρύνουν τις γνώσεις τους αλληλεπιδρώντας με συμφοιτητές τους, με τους οποίους μοιράζονται το ίδιο πάθος.
          </p>
        </div>
      </div>
      <div className="about-section about-section-2">
        <div className="about-content">
          <h2 className="about-heading">Our Activitys</h2>
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

export default About;
