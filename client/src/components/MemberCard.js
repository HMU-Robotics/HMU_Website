import Card from 'react-bootstrap/Card'
import "./MemberCard.css"


function MemberCard(props) {

    const id = props.id;
    const name = props.name;
    const desc = props.desc;
    const img = props.img;

    console.log(props);

    return (
        <Card className='card' style={{width: '18rem' }}>
            <Card.Img variant='top' src={img} />
            <Card.Body>
                <Card.Title className='name'>{name}</Card.Title>
                <Card.Text className='desc'>{desc}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MemberCard;