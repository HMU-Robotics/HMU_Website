import "./TableMembers.css"
import TableCard from './TableCard'


function TableMembers(props){

    const table_data = {
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
            }
        ]
    }
    return(
        <div className="table_members">
            <TableCard table_data={table_data['categories'][0]}/>
            <TableCard table_data={table_data['categories'][1]}/>
            <TableCard table_data={table_data['categories'][2]}/>
        </div>
    )
}

export default TableMembers