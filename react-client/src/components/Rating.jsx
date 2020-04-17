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
  <div className="rating"><span className="stars"><img src={stars}></img></span><p> based on {props.review_count} reviews from <span style={{color:'red'}}>yelp</span></p>
  <svg id="24x24_yelp_outline" height="24" viewBox="0 0 24 24" width="24" fill="red"><path d="M19.043 15.504l-3.34-1.085 3.376-.97a1.895 1.895 0 0 0 1.21-2.58 8.627 8.627 0 0 0-2.23-3.06 1.892 1.892 0 0 0-2.82.36l-1.967 2.91V2.89a1.893 1.893 0 0 0-2.037-1.886 13.51 13.51 0 0 0-4.74 1.27 1.894 1.894 0 0 0-.82 2.653l4.067 7.046.03.052-3.154-1.54A1.89 1.89 0 0 0 4 11.58a8.62 8.62 0 0 0-.395 3.764 1.893 1.893 0 0 0 2.338 1.623l3.407-.85L7 18.727a1.893 1.893 0 0 0 .336 2.826 8.823 8.823 0 0 0 3.503 1.418 1.886 1.886 0 0 0 2.2-1.8l.12-3.51 1.86 2.98a1.89 1.89 0 0 0 2.81.46 8.818 8.818 0 0 0 2.327-2.98 1.89 1.89 0 0 0-1.123-2.61zm-5.388-3.177l2.422-3.59a.893.893 0 0 1 1.33-.172c.83.732 1.51 1.65 1.968 2.71a.894.894 0 0 1-.572 1.215l-4.162 1.194a.923.923 0 0 1-.25.036c-.67 0-1.14-.778-.73-1.393zM6.55 4.43a.893.893 0 0 1 .388-1.252A12.475 12.475 0 0 1 11.395 2c.487 0 .89.397.89.893v8.137c0 .556-.45.893-.903.893a.867.867 0 0 1-.763-.447L6.55 4.43zM5.705 16a.895.895 0 0 1-1.103-.767 7.68 7.68 0 0 1 .35-3.33.89.89 0 0 1 1.24-.516l3.89 1.898c.75.365.634 1.466-.174 1.668L5.704 16zm6.344 5.138a.894.894 0 0 1-1.04.85 7.758 7.758 0 0 1-3.11-1.256.893.893 0 0 1-.16-1.333l2.896-3.22a.89.89 0 0 1 1.554.62l-.152 4.33zm1.24-6.747v-.02l.01.017c-.005.004-.01.01-.016.013zm5.97 3.3a7.762 7.762 0 0 1-2.06 2.64.89.89 0 0 1-1.328-.21l-2.294-3.68c-.388-.62.09-1.366.75-1.366a.9.9 0 0 1 .282.047l4.118 1.33a.893.893 0 0 1 .53 1.235z"></path></svg>
  </div>
  )
}

export default Rating;