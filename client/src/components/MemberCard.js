import "./MemberCard.css"


function MemberCard(props) {

    // description will be automatic from admin panel TODO

    const id = props.children.id;
    const name = props.children.name;
    const desc = props.children.desc;
    const img = props.children.img;
    const dateAdded = props.children.dateAdded;
    const dateRemoved = props.children.dateRemoved;


    return (
        <div className='members-con'>
            <img id='members-img' src={img}/>
            <div className='members-body'>
                <h3 className='members-title'>{name}</h3>
                <p className='members-desc'>{desc}</p>
                <p className='members-role'>title</p>
                <p className='members-date'>{dateAdded} - {dateRemoved}</p>
        </div>
      </div>
    );
}

export default MemberCard;