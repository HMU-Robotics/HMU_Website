

function Icons (props){
    return (
    <a href={props.link}>
        <img src={props.img} alt={props.title} id={props.title}/>
    </a>
    )
}


export default Icons