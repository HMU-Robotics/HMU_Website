import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function NewsCard(props) {
  const { id, title, desc, date: date_json, img } = props;
  const date = date_json?.substring(0, 10);
  const image = img ? `/Uploads/posts/${img}` : 'Media/about.jpg';
  const singleImage = image.split(',')[0];

  return (
    <Link to={`/Post/${id}`} className="card-link">
      <div className="card-con">
        <img className="card-image" src={singleImage} alt="Post Thumbnail" />
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p className="card-date">{date}</p>
          <p className="card-desc">{desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default NewsCard;