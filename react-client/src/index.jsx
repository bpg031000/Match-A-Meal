import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Card from './components/Card.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      locations: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/locations', 
      success: (data) => {
        this.setState({
          locations: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Location Card</h1>
      <Card locations={this.state.locations[0]}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));