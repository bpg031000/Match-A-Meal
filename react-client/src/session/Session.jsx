import React from 'react';
import $ from 'jquery';
import Card from './Card.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      locations: [],
      loading: true,
      approved: [],
      declined: [],
      currentOption: 0
    };
    // let match = useRouteMatch();
    this.onApprove = this.onApprove.bind(this);
    this.onDecline = this.onDecline.bind(this);
    // let { sessionId } = useParams();
    // console.log(sessionId); 
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
    if(locId==="NSnnUpMyby6L8ALJR3AQwQ"){
      alert("It's a match!")
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
    return this.state.loading ? <div>Loading...</div> :(
    <div>
      {/* <Nav /> */}
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

export default Session;