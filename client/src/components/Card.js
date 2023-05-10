import "./Card.css"
import { Link } from 'react-router-dom';


function NewsCard(props) {

  const post_id = props.id;
  const title = props.title;
  const desc = props.desc;
  const date_json = props.date;
  const date = date_json?.substring(0,10)

  const image = props.img ? `/Uploads/posts/${props.img}` : "Media/about.jpg"
  const singleImage = image.split(',')[0];

  return (
    <Link to={`/Post/${post_id}`} className="card-link">
      <div className="card-con">
        {console.log(singleImage)}
        <img id='card-img' src={singleImage}/>
        <div className='card-body'>
          <p className='card-title'>{title}</p>
          <p className='card-date'>{date}</p>
          <p className='card-desc'>{desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;