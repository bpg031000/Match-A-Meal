import React from 'react';

const Card = props => 
(
  <div className="card">
    <div className="title"> {props.location ? props.location.title : 'Title'} </div>
      <div className="photo">
       {/* {props.location ? props.location.photoURL : 'photo'} */}
      </div>
    <div className="details"> {props.location ? props.location.details : 'details'} </div>
    <button className="button yes">Yes</button>
    <button className="button no">No</button>
  </div>
);

export default Card;

