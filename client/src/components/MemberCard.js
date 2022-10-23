import Card from 'react-bootstrap/Card'
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
        <Card className='member-card' style={{width: '18rem', height: '18em' }}>
            <Card.Img variant='top' src={img} />
            <Card.Body>
                <Card.Title className='member-name'>{name}</Card.Title>
                <Card.Text className='member-desc'>{desc}</Card.Text>
                <Card.Text className='member-date'>{dateAdded} - {dateRemoved}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MemberCard;