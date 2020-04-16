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
      loading: true
    }
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

  render () {
    return this.state.loading ? <div>Loading...</div> :
   (<div>
      <Nav />
      <div className="content-container">
      <Card location={this.state.locations[0]}/>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));