import "./hero.css"


function Hero(){
    return(
            <div className="video-wrapper">
                    <video autoPlay={true} muted={true} loop>
                        <source src="/Media/teaser.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>

                    <div className="hero-header">
                        <h1 className='hero-title'>HMU Robotics Club</h1>
                        <div className='hero-box'>
                            <p>
                            Σκοπός της Λέσχης Ρομποτικής του ΕΛΜΕΠΑ είναι να δώσει στους φοιτητές την ευκαιρία να γνωρίσουν τους κλάδους που σχετίζονται με τη Ρομποτική. Μέσω σεμιναρίων, projects και διαγωνισμών, τα μέλη μας διευρύνουν τις γνώσεις τους αλληλεπιδρώντας με συμφοιτητές τους, που μοιράζονται το ίδιο πάθος με αυτούς. Ανακαλύπτοντας τους κλάδους που απαρτίζουν τη Ρομποτική, μαθαίνουν να δημιουργούν σε ένα περιβάλλον ομαδικότητας.
                            Ευπρόσδεκτοι είναι φοιτητές από κάθε σχολή και έτος φοίτησης.
                            </p>
                        </div>
                            <div className='btn-holder'>
                                <button className='hero-btn'>Projects</button>
                                <button className='hero-btn'>About us</button>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Hero