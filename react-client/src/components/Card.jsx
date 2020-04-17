import React from 'react';
import Rating from './Rating.jsx';

const Card = (props)=>{
  console.log(props);
  let imageStyle = {
    backgroundImage: `url(${props.location.image_url})`,
    minHeight:'300px',
    maxHeight:'300px',
    minWidth:'300px',
    maxWidth:'300px',
    backgroundSize: 'cover'
  }
  return (
    <div className="card">
    <div className="title">
      <a href={props.location.url}>
       {props.location ? props.location.name : 'Title'}
      </a>
    </div>
    <div className="photo" style={imageStyle}>
      {/* {props.location ? props.location.photoURL : 'photo'} */}
    </div>
    {/* <div className="details"> {props.location ? props.location.details : 'details'} </div> */}
    <Rating rating={props.location.rating} review_count={props.location.review_count} />
    <button className="button yes" onClick={()=>props.onApprove(props.location.id)}>Yes</button>
    <button className="button no" onClick={()=>props.onDecline(props.location.id)}>No</button>
    </div>
  )
};

export default Card;

