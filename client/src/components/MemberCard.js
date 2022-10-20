import Card from 'react-bootstrap/Card'
import "./MemberCard.css"


function MemberCard(props) {

    const id = props.children[1].id;
    const name = props.children[1].name;
    const desc = props.children[1].desc;
    const img = props.children[1].img;
    const dateAdded = props.children[1].dateAdded;
    const dateRemoved = props.children[1].dateRemoved;

    console.log(props.children);

    return (
        <Card className='card' style={{width: '18rem' }}>
            <Card.Img variant='top' src={img} />
            <Card.Body>
                <Card.Title className='name'>{name}</Card.Title>
                <Card.Text className='desc'>{desc}</Card.Text>
                <Card.Text className='date'>{dateAdded} - {dateRemoved}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MemberCard;