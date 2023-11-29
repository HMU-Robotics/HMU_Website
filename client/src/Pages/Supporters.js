import React , { useContext } from "react"
import './Supporters.css'
import SupportCard from "../components/SupportCard"
import LanguageContext from "../hooks/LanguageContext"

function Supporters() {

    const {language, setLanguage} = useContext(LanguageContext);

        const text_gr = {
            get3d: 'Μία από τις λίγες εταιρείες στην Ελλάδα που προσφέρουν ολοκληρωμένες λύσεις και προϊόντα γύρω από τον κόσμο της Προσθετικής Κατασκευής , τρισδιάστατης εκτύπωσης, τρισδιάστατης σάρωσης και τρισδιάστατου σχεδιασμού.',
            csrl: 'Το Εργαστήριο Συστημάτων Ελέγχου & Ρομποτικής (CSRL), μια συνεργασία του Τμήματος Ηλεκτρολόγων Μηχανικών & Μηχανικών Υπολογιστών και του Τμήματος Μηχανολόγων Μηχανικών της Σχολής Μηχανικών του Ελληνικού Μεσογειακού Πανεπιστημίου (HMU).',
            mechatron:'Η Mechatron συνδυάζει τη Μηχανολογία, την Ηλεκτρολογία και την Ηλεκτρονική Μηχανική και την Επιστήμη Υπολογιστών για να παρέχει λύσεις ηλιακής ενέργειας στις πιο δύσκολες βιομηχανικές καταστάσεις.',
            solidworks:'Το SOLIDWORKS χρησιμοποιείται από εκατομμύρια σχεδιαστές και μηχανικούς σε εκατοντάδες χιλιάδες εταιρείες. Είναι ένα από τα πιο δημοφιλή λογισμικά τρισδιάστατου σχεδιασμού στην αγορά.',
            veneris: 'Η VENERIS DECO δραστηριοποιείται στην κατασκευή επίπλων και εδρεύει στο Ηράκλειο Κρήτης με μια επιτυχημένη πορεία, πάντα με σεβασμό στις επιθυμίες των πελατών'
        }


        const text_eng = {
            get3d:'One of the few companies in Greece that offers complete solutions and products around the world of Prosthetic Manufacturing, 3D printing, 3D scanning and 3D design.',
            csrl:'The Control Systems & Robotics Laboratory (CSRL), a collaboration of the Department of Electrical & Computer Engineering and the Department of Mechanical Engineering of the School of Engineering of the Hellenic Mediterranean University (HMU',
            mechatron:'Mechatron brings together Mechanical Engineering, Electrical and Electronic Engineering, and Computer Science to provide solar energy solutions to the most challenging industrial situations.',
            solidworks:'SOLIDWORKS is used by millions of designers and engineers at hundreds of thousands of companies. It’s one of the most popular design and engineering software on the market.',
            veneris: 'VENERIS DECO is active in the manufacturing of furniture, and is based in Heraklion, Crete, with a successful course, always with respect to the clients’ wishes'
        }   

        const img = {
            get3d:'Media/support/get_3d.png',
            csrl:'Media/support/CSRL.png',
            mechatron:'Media/support/mechatron_1.png',
            solidworks:'Media/support/solidworks.png',
            veneris:'Media/support/VENERIS.png'
        }

        const links = {
            get3d:'https://get3d.gr/en/ ',
            csrl:'https://csrl.hmu.gr/',
            mechatron:'https://mechatron.eu/',
            solidworks:'https://www.solidworks.com/',
            veneris:'https://venerisdeco.gr/'
        }

        const id = ['get3d','csrl','mechatron','solidworks','veneris']

        if(language === "greek"){
            return(
                <div className="support-cont">
                    <p className="support-thanks">Ευχαριστούμε θερμά τους χορηγούς και τους συνεργάτες μας</p>
                    <div className="support-area">
                        <h2 className="support-title">Χορηγοί</h2>
                        <SupportCard text={text_gr.get3d} img={img.get3d} link={links.get3d} id={id[0]}/>
                        <SupportCard text={text_gr.mechatron} img={img.mechatron} link={links.mechatron} id={id[4]}/>
                        <SupportCard text={text_gr.solidworks} img={img.solidworks} link={links.solidworks} id={id[5]}/>
                        <SupportCard text={text_gr.veneris} img={img.veneris} link={links.veneris} id={id[6]}/>
                        <h2 className="support-title">Υποστηρικτές</h2>
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
                        <SupportCard text={text_eng.mechatron} img={img.mechatron} link={links.mechatron} id={id[4]}/>
                        <SupportCard text={text_eng.solidworks} img={img.solidworks} link={links.solidworks} id={id[5]}/>
                        <SupportCard text={text_eng.veneris} img={img.veneris} link={links.veneris} id={id[6]}/>
                        <h2 className="support-title">Supporters</h2>
                        <SupportCard text={text_eng.csrl} img={img.csrl} link={links.csrl} id={id[3]}/>
                        
                    </div>
                </div>
            )
        }
}


export default Supporters