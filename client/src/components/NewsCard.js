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
    <Card className='card-news' onClick={() => window.open(`/test/path/${id}`)} style={{ width: '22rem', height: '25em'}}>
    <Card.Img className='card-img' variant="top" src={img} />
    <Card.Body>
      <Card.Title className='card-title'>{title}</Card.Title>
      <p className='card-date'>{date}</p>
      <Card.Text className='card-desc'>{desc}lorem ipsum bla bla kdjfghlskdjfh ,jkdfhkjahsdjj</Card.Text>
    </Card.Body>
  </Card>
  );
}

export default NewsCard;