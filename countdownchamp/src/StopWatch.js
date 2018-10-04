import React, { Component } from 'react';
import './App.css';

class StopWatch extends Component{
  constructor(props){
    super(props);
    this.state = {
      startFrom: 10000
    }
  }

  componentWillMount(){
    this.countDown(this.props.startFrom);
  }

  componentDidMount(){
    setInterval(() => this.countDown(this.props.startFrom), 1000);
  }

  countDown(startFrom){
    console.log("start>>> "+startFrom);
    if(startFrom = 0){
      return 0;
    }else{
      this.state.startFrom - 1;
    }

    startFrom = 0 ? '0' : this.props.startFrom - 1;
    console.log("current: "+ startFrom);
  }

  render(){
    return (
      <div>
        <div className="StopWatch-couting">
          {this.countDown(this.state.startFrom)} counting
        </div>
      </div>
    )
  }

}


export default StopWatch;
