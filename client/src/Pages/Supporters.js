import React , { useContext } from "react"
import './Supporters.css'
import SupportCard from "../components/SupportCard"
import LanguageContext from "../hooks/LanguageContext"

function Supporters() {

    const {language, setLanguage} = useContext(LanguageContext);

        const text_gr = {
            get3d: 'Μία από τις λίγες εταιρείες στην Ελλάδα που προσφέρουν ολοκληρωμένες λύσεις και προϊόντα γύρω από τον κόσμο της Προσθετικής Κατασκευής , τρισδιάστατης εκτύπωσης, τρισδιάστατης σάρωσης και τρισδιάστατου σχεδιασμού.',
            o3: 'Η Ο3 – Out Of the Ordinary εφαρμόζει καινοτόμα εκπαιδευτικά προγράμματα στα οποία η μάθηση συνδυάζεται με τη διασκέδαση.',
            hero:'Ο HERO είναι ένας μη κερδοσκοπικός οργανισμός που στόχο έχει την σωστή ανάπτυξη και εξάπλωση της Εκπαιδευτικής Ρομποτικής και του STEAM στην Ελλάδα.',
            csrl: 'Το Εργαστήριο Συστημάτων Ελέγχου & Ρομποτικής (CSRL), μια συνεργασία του Τμήματος Ηλεκτρολόγων Μηχανικών & Μηχανικών Υπολογιστών και του Τμήματος Μηχανολόγων Μηχανικών της Σχολής Μηχανικών του Ελληνικού Μεσογειακού Πανεπιστημίου (HMU).',
            mechatron:'Η Mechatron συνδυάζει τη Μηχανολογία, την Ηλεκτρολογία και την Ηλεκτρονική Μηχανική και την Επιστήμη Υπολογιστών για να παρέχει λύσεις ηλιακής ενέργειας στις πιο δύσκολες βιομηχανικές καταστάσεις.'
        }


        const text_eng = {
            get3d:'One of the few companies in Greece that offers complete solutions and products around the world of Prosthetic Manufacturing, 3D printing, 3D scanning and 3D design.',
            o3:'O3 – Out Of the Ordinary implements innovative educational programs in which learning is combined with fun.',
            hero:'HERO is a non-profit organization whose goal is the proper development and spread of Educational Robotics and STEAM in Greece.',
            csrl:'The Control Systems & Robotics Laboratory (CSRL), a collaboration of the Department of Electrical & Computer Engineering and the Department of Mechanical Engineering of the School of Engineering of the Hellenic Mediterranean University (HMU',
            mechatron:'Mechatron brings together Mechanical Engineering, Electrical and Electronic Engineering, and Computer Science to provide solar energy solutions to the most challenging industrial situations.'
        }   

        const img = {
            get3d:'Media/support/get_3d.png',
            o3:'Media/support/o3.png',
            hero:'Media/support/hero.png',
            csrl:'Media/support/CSRL_Logo.png',
            mechatron:'Media/support/mechatron.png'
        }

        const links = {
            get3d:'https://get3d.gr/en/ ',
            o3:'https://www.o3.gr/',
            hero:'https://www.he-ro.gr/ ',
            csrl:'https://csrl.hmu.gr/',
            mechatron:'https://mechatron.eu/'
        }

        const id = ['get3d','o3','hero','csrl','mechatron']

        if(language === "greek"){
            return(
                <div className="support-cont">
                    <p className="support-thanks">Ευχαριστούμε θερμά τους χορηγούς και τους συνεργάτες μας</p>
                    <div className="support-area">
                        <h2 className="support-title">Χορηγοί</h2>
                        <SupportCard text={text_gr.get3d} img={img.get3d} link={links.get3d} id={id[0]}/>
                        <SupportCard text={text_gr.o3} img={img.o3} link={links.o3} id={id[1]}/>
                        <SupportCard text={text_gr.mechatron} img={img.mechatron} link={links.mechatron} id={id[4]}/>
                        <h2 className="support-title">Υποστηρικτές</h2>
                        <SupportCard text={text_gr.hero} img={img.hero} link={links.hero} id={id[2]}/>
                        <SupportCard text={text_gr.csrl} img={img.csrl} link={links.csrl} id={id[3]}/>
                        
                    </div>
                </div>
            )
        }
        else if(language === "english"){
            return(
                <div className="support-cont">
                    <p className="support-thanks">We sincerely thank our sponsors and partners</p>
                    <div className="support-area">
                        <h2 className="support-title">Contributors</h2>
                        <SupportCard text={text_eng.get3d} img={img.get3d} link={links.get3d} id={id[0]}/>
                        <SupportCard text={text_eng.o3} img={img.o3} link={links.o3} id={id[1]}/>
                        <SupportCard text={text_eng.mechatron} img={img.mechatron} link={links.mechatron} id={id[4]}/>
                        <h2 className="support-title">Supporters</h2>
                        <SupportCard text={text_eng.hero} img={img.hero} link={links.hero} id={id[2]}/>
                        <SupportCard text={text_eng.csrl} img={img.csrl} link={links.csrl} id={id[3]}/>
                        
                    </div>
                </div>
            )
        }
}


export default Supporters