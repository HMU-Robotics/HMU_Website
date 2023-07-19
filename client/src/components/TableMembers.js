import "./TableMembers.css"
import TableCard from './TableCard'
import LanguageContext from "../hooks/LanguageContext";
import React , { useContext } from "react"


function TableMembers(props){

    const {language, setLanguage} = useContext(LanguageContext);


    const table_data_greek = {
        'categories':[
            {
                'title':'Μηχανολογία',
                'data':['Μηχανολογικό σχέδιο','Τρισδιάστατη σχεδίαση','Τρισδιάστατη εκτύπωση']
            },
            {
                'title':'Ηλεκτρολογικά',
                'data':['Σχεδιασμός ηλεκτρονικών πλακετών' , 'Εφαρμογές Μικροελεγκτών']
            },
            {
                'title':'Προγραμματισμός',
                'data':['Web/App development' , 'Μηχανική Μάθηση' ,'Μηχανική Όραση','Ρομποτικά συστήματα']
            },
            {
                'title':"Προώθηση",
                'data':['Social Media','Managment','Γραφιστικά','Βίντεο,Φωτογραφιών']
            }
        ]
    }

    const table_data_english = {
        'categories':[
            {
                'title':'Μηχανολογία',
                'data':['Μηχανολογικό σχέδιο','Τρισδιάστατη σχεδίαση','Τρισδιάστατη εκτύπωση']
            },
            {
                'title':'Ηλεκτρολογικά',
                'data':['Σχεδιασμός ηλεκτρονικών πλακετών' , 'Εφαρμογές Μικροελεγκτών']
            },
            {
                'title':'Προγραμματισμός',
                'data':['Web/App development' , 'Μηχανική Μάθηση' ,'Μηχανική Όραση','Ρομποτικά συστήματα']
            },
            {
                'title':"Προώθηση",
                'data':['Social Media','Managment','Γραφιστικά','Βίντεο,Φωτογραφιών']
            }
        ]
    }

    // Greek
    if(language === "greek"){
        return(
            <div className="container_table_members">
                <div className="table_members" id="table_1">
                    <TableCard table_data={table_data_greek['categories'][0]}/>
                    <TableCard table_data={table_data_greek['categories'][1]}/>
                </div>
                <div className="table_members" id="table_2">
                    <TableCard table_data={table_data_greek['categories'][2]}/>
                    <TableCard table_data={table_data_greek['categories'][3]}/>
                </div>
            </div>
        )
    }
    // English
    else if(language === "english"){
        return(
            <div className="container_table_members">
                <div className="table_members" id="table_1">
                    <TableCard table_data={table_data_greek['categories'][0]}/>
                    <TableCard table_data={table_data_greek['categories'][1]}/>
                </div>
                <div className="table_members" id="table_2">
                    <TableCard table_data={table_data_greek['categories'][2]}/>
                    <TableCard table_data={table_data_greek['categories'][3]}/>
                </div>
            </div>
        )
    }
}

export default TableMembers