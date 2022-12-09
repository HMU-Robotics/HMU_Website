import Card from 'react-bootstrap/Card';
import "./Card.css"

function NewsCard(props) {

  const id = props.children.id;
  const title = props.children.title;
  const desc = props.children.desc;
  const date = props.children.date;
  const img = props.children.img;

  return (
    <div className='card-con' onClick={()=>window.open(`/Post/${id}`)}>
      <img id='card-img' src={img}/>
      <div className='card-body'>
        <p className='card-title'>{title}</p>
        <p className='card-date'>{date}</p>
        <p className='card-desc'>{desc}</p>
      </div>
    </div>
  );
}

export default NewsCard;