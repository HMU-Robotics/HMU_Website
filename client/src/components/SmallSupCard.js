import "./SmallSupCard.css"

function SmallSupCard(props){


    return(
        <div className="smallsup-card">
            <a className="smallsup-a"><img src={props.supporter.img} className="smallsup-img"/></a>
        </div>
    )
}


export default SmallSupCard