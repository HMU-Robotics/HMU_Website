import "./Card.css"
import { Link } from 'react-router-dom';


function NewsCard(props) {

  const id = props.id;
  const title = props.title;
  const desc = props.desc;
  const date = props.date;
  const img = props.img;

  return (
    <Link to={`/Post/${id}`} className="card-link">
      {console.log(props)}
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