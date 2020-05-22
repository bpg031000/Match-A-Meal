import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import InfoEntry from './InfoEntry.jsx'
import Nav from '../components/Nav.jsx'

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading:true      
    };
    this.getLocation=this.getLocation.bind(this);
    }

  componentDidMount() {
    this.setState({loading:false});  
  //   $.ajax({
  //     url: '/locations', 
  //     success: (data) => {
  //       this.setState({
  //         locations: data,
  //         loading: false
  //       });
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  }

  //function that gets the location and returns it
  getLocation() {
    const showPosition = (position)=>{
      var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      }
      console.log(location)
    };
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geo Location not supported");
    }
    //function that retrieves the position
  } 


  generateSessionId(){
    // let now = new Date();
    // return now.toString().split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
    return String.fromCharCode(65+Math.floor(Math.random()*26), 65+Math.floor(Math.random()*26), 65+Math.floor(Math.random()*26), 65+Math.floor(Math.random()*26));           
  }

  render () {
    return this.state.loading ? <div>Loading...</div> :
      (
        <div>
          <div className="content-container">
            <InfoEntry getLocation={this.getLocation} />
          </div>
        </div>
      )
  }
}

export default Start;