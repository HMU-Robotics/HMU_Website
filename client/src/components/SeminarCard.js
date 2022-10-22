import Card from 'react-bootstrap/Card';
import "./SeminarCard.css"


function SeminarCard(props) {

  const id = props.children.id;
  const title = props.children.title;
  const desc = props.children.desc;
  const date = props.children.date;
  const img = props.children.img;


    return (
      <Card className='seminar-card' onClick={() => window.open(`/test/path/${id}`)} style={{ width: '22rem', height: '25rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='seminar-title'>{title}</Card.Title>
          <Card.Text className='seminar-date'>{date}</Card.Text>
          <Card.Text className='seminar-desc'>{desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  export default SeminarCard;