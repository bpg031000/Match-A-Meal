import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Card from './components/Card.jsx';
import Nav from './components/Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      locations: [],
      loading: true,
      approved: [],
      declined: [],
      currentOption: 0
    };
    this.onApprove = this.onApprove.bind(this);
    this.onDecline = this.onDecline.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/locations', 
      success: (data) => {
        this.setState({
          locations: data,
          loading: false
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  onApprove(locId) {
    if("NSnnUpMyby6L8ALJR3AQwQ" === locId){
      alert("It's a match!");
    } else {
      let previousState = this.state;
      console.log(previousState);
      previousState.approved.push(locId);
      previousState.currentOption++;
      this.setState(previousState);
    }
  }

  onDecline(locId) {
    let previousState = this.state;
    previousState.declined.push(locId);
    previousState.currentOption++;
    this.setState(previousState);
  }

  func(){}

  render () {
    return this.state.loading ? <div>Loading...</div> :
   (<div>
      <Nav />
      <div className="content-container">
      <Card
      location={this.state.locations[this.state.currentOption]}
      onApprove={this.onApprove || this.func}
      onDecline={this.onDecline || this.func}
      />
      </div>
    </div>)
  }
}

//function that gets the location and returns it
function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geo Location not supported by browser");
  }
}
//function that retrieves the position
function showPosition(position) {
  var location = {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude
  }
  console.log(location)
}
//request for location
getLocation();

ReactDOM.render(<App />, document.getElementById('app'));