import Card from 'react-bootstrap/Card';
import "./ProjectCard.css"


function ProjectCard(props) {

  const id = props.children.id;
  const title = props.children.title;
  const desc = props.children.desc;
  const date = props.children.date;
  const img = props.children.img;


    return (
      <Card className='project-card' onClick={() => window.open(`/test/path/${id}`)} style={{ width: '22rem', height: '25em' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='project-title'>{title}</Card.Title>
          <Card.Text className='project-date'>{date}</Card.Text>
          <Card.Text className='project-desc'>{desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  export default ProjectCard;