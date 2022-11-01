import './TableCard.css'


function TableCard(props){

    return(
        <div className='table_card'>
            <h3 className='table_title'>
                {props.table_data.title}
            </h3>
            <hr/>
            <p className='table_text'>{props.table_data.data[0]}</p>
            <p className='table_text'>{props.table_data.data[1]}</p>
            <p className='table_text'>{props.table_data.data[2]}</p>
            <p className='table_text'>{props.table_data.data[3]}</p>
        </div>
    )
}

export default TableCard