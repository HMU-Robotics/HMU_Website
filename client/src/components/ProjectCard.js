import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"


function ProjectCard(props) {

  // data received from db
  const title = "Card Title";
  const desc = "Some quick example text to build on the card title and make up thebulk of the card's content.";
  const date = "01/01/2000";
  const id = "12345";
  const img = "Media/testimage.png";


    return (
      <Card className='card' onClick={() => window.open(`/test/path/${id}`)} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='title'>{title}</Card.Title>
          <Card.Text className='date'>{date}</Card.Text>
          <Card.Text className='desc'>
            {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  export default ProjectCard;
  