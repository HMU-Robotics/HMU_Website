import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./NewsCard.css"

function NewsCard() {
  return (
    <Card className='card-news' style={{ width: '18rem' }}>
    <Card.Img className='card-img' variant="top" src="Logos/Logo.png" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Read More</Button>
    </Card.Body>
  </Card>
  );
}

export default NewsCard;