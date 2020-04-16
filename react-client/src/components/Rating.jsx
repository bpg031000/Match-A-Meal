import React from 'react';

const Rating = props => {
  let r = props.rating, stars;
  switch (true) {
    case (r >= 4.75):
      stars = './yelp-assets/small_5.png';
      break;
    case (r >= 4.25):
      stars = './yelp-assets/small_4_half.png';
      break;
    case (r >= 3.75):
      stars = './yelp-assets/small_4.png';
      break;
    case (r >= 3.25):
      stars = './yelp-assets/small_3_half.png';
      break;
    case (r >= 2.75):
      stars = './yelp-assets/small_3.png';
      break;
    case (r >= 2.25):
      stars = './yelp-assets/small_2_half.png';
      break;
    case (r >= 1.75):
      stars = './yelp-assets/small_2.png';
      break;
    case (r >= 1.25):
      stars = './yelp-assets/small_1_half.png';
      break;
    case (r >= .75):
      stars = './yelp-assets/small_1.png';
      break;
    default:
      stars = './yelp-assets/small_0.png';
      break;
    }
  return (
  <div className="rating"><span className="stars"><img src={stars}></img></span><p> based on {props.review_count} reviews</p></div>
  )
}

export default Rating;