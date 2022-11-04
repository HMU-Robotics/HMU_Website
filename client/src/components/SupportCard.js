import './SupportCard.css'


function SupportCard(props){

    return(
        <div className='support-card'>
            <a href={props.link} className='support-a'><img className='support-img' id={props.id} src={props.img}/></a>
            <p className='support-textarea'>{props.text}</p>
        </div>
    )
}

export default SupportCard