import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Session from './session/Session.jsx';
import Start from './Start/Start.jsx'
import Nav from './components/Nav.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true
    };
  }

  componentDidMount() {
    this.setState({loading:false});
    // $.ajax({
    //   url: '/locations', 
    //   success: (data) => {
    //     this.setState({
    //       locations: data,
    //       loading: false
    //     });
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return(
    <Router>
      <div>
        <Nav />
        <div className="content-container">
        <Switch>
          <Route path="/session/:sessionId" children={<Session />} />
          <Route path="/">
            <Start />
            {/* <span>test</span> */}
          </Route>
        </Switch>
        </div>
        </div>
   </Router>
   )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));