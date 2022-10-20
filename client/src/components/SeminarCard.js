import Card from 'react-bootstrap/Card';
import "./SeminarCard.css"


function SeminarCard(props) {

  const id = props.children.id;
  const title = props.children.title;
  const desc = props.children.desc;
  const date = props.children.date;
  const img = props.children.img;


    return (
      <Card className='card' onClick={() => window.open(`/test/path/${id}`)} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='title'>{title}</Card.Title>
          <Card.Text className='date'>{date}</Card.Text>
          <Card.Text className='desc'>{desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  export default SeminarCard;