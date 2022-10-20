import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./NewsCard.css"

function NewsCard(props) {

  const id = props.children.id;
  const title = props.children.title;
  const desc = props.children.desc;
  const date = props.children.date;
  const img = props.children.img;

  return (
    <Card className='card-news' style={{ width: '18rem' }}>
    <Card.Img className='card-img' variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <p className='card-date'>{date}</p>
      <Card.Text>{desc}</Card.Text>
      <Button variant="primary" onClick={() => window.open(`/test/path/${id}`)}>Read More</Button>
    </Card.Body>
  </Card>
  );
}

export default NewsCard;