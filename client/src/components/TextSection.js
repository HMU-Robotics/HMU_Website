import "./TextSection.css"


function TextSection(props){
    return(
        <div className="section-con">
            <h3 className="section-title">{props.name}</h3>
            <div className="Text-con">
                <div className="Text-area">
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className="image-area">
                        <img src={props.img} alt={props.name}/>
                </div>
            </div>
        </div>
    )
}


export default TextSection