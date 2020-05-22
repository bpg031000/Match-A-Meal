import React from 'react';
import { Redirect } from 'react-router-dom'

class InfoEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip:'',
      redirect:false
    };
    this.onChange=this.onChange.bind(this);
    this.onClick=this.onClick.bind(this);
  }

  onChange(event){
    // console.log(event.target.value)
    this.setState({zip:event.target.value});
  }

  onClick(){
    console.log(this.state.zip);
    this.setState({redirect:true})
  }

  renderRedirect(){
    if (this.state.redirect){
      let id = String.fromCharCode(65+Math.floor(Math.random()*26), 65+Math.floor(Math.random()*26), 65+Math.floor(Math.random()*26), 65+Math.floor(Math.random()*26));
      return <Redirect to={`/session/${id}`} />
    }
  }

  render(){
    return (
      <div>
        {this.renderRedirect()}
        <div>
          <button onClick={this.props.getLocation}>Detect Location</button>
        </div>
        <div>
          - or - 
        </div>
        <div>
          Enter zip:
        </div>
        <input type='text' value={this.state.zip} onChange={this.onChange}></input>
        <button onClick={this.onClick}>Submit</button>
      </div>
    )
  }
}

export default InfoEntry;