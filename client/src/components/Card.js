import "./Card.css"
import { Link } from 'react-router-dom';


function NewsCard(props) {

  const id = props.children.id;
  const title = props.children.title;
  const desc = props.children.desc;
  const date = props.children.date;
  const img = props.children.img;

  return (
    <Link to={`/Post/${id}`} className="card-link">
      {console.log(props.children)}      
      <img id='card-img' src={img}/>
      <div className='card-body'>
        <p className='card-title'>{title}</p>
        <p className='card-date'>{date}</p>
        <p className='card-desc'>{desc}</p>
      </div>
    </Link>
  );
}

export default NewsCard;