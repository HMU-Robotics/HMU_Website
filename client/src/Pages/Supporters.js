import React , { useContext } from "react"
import './Supporters.css'
import SupportCard from "../components/SupportCard"
import LanguageContext from "../hooks/LanguageContext"

function Supporters() {

    const {language, setLanguage} = useContext(LanguageContext);

        const text = {
            get3d: 'Μία από τις λίγες εταιρείες στην Ελλάδα που προσφέρουν ολοκληρωμένες λύσεις και προϊόντα γύρω από τον κόσμο της Προσθετικής Κατασκευής , τρισδιάστατης εκτύπωσης, τρισδιάστατης σάρωσης και τρισδιάστατου σχεδιασμού.',
            o3: 'Η Ο3 – Out Of the Ordinary εφαρμόζει καινοτόμα εκπαιδευτικά προγράμματα στα οποία η μάθηση συνδυάζεται με τη διασκέδαση.',
            hero:'Ο HERO είναι ένας μη κερδοσκοπικός οργανισμός που στόχο έχει την σωστή ανάπτυξη και εξάπλωση της Εκπαιδευτικής Ρομποτικής και του STEAM στην Ελλάδα.',
            csrl: 'Το Εργαστήριο Συστημάτων Ελέγχου & Ρομποτικής (CSRL), μια συνεργασία του Τμήματος Ηλεκτρολόγων Μηχανικών & Μηχανικών Υπολογιστών και του Τμήματος Μηχανολόγων Μηχανικών της Σχολής Μηχανικών του Ελληνικού Μεσογειακού Πανεπιστημίου (HMU).'
        }

        const img = {
            get3d:'Media/support/get_3d.png',
            o3:'Media/support/o3.png',
            hero:'Media/support/hero.png',
            csrl:'Media/support/CSRL_Logo.png'
        }

        const links = {
            get3d:'https://get3d.gr/en/ ',
            o3:'https://www.o3.gr/',
            hero:'https://www.he-ro.gr/ ',
            csrl:'https://csrl.hmu.gr/'
        }

        const id = ['get3d','o3','hero','csrl']

        if(language === "greek"){
            return(
                <div className="support-cont">
                    <p className="support-thanks">Ευχαριστούμε θερμά τους χορηγούς και τους συνεργάτες μας</p>
                    <div className="support-area">
                        <h2 className="support-title">Χορηγοί</h2>
                        <SupportCard text={text.get3d} img={img.get3d} link={links.get3d} id={id[0]}/>
                        <SupportCard text={text.o3} img={img.o3} link={links.o3} id={id[1]}/>
                        <h2 className="support-title">Υποστηρικτές</h2>
                        <SupportCard text={text.hero} img={img.hero} link={links.hero} id={id[2]}/>
                        <SupportCard text={text.csrl} img={img.csrl} link={links.csrl} id={id[3]}/>
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
                        <SupportCard text={text.get3d} img={img.get3d} link={links.get3d} id={id[0]}/>
                        <SupportCard text={text.o3} img={img.o3} link={links.o3} id={id[1]}/>
                        <h2 className="support-title">Supporters</h2>
                        <SupportCard text={text.hero} img={img.hero} link={links.hero} id={id[2]}/>
                        <SupportCard text={text.csrl} img={img.csrl} link={links.csrl} id={id[3]}/>
                    </div>
                </div>
            )
        }
}


export default Supporters