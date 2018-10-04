import React, { Component } from 'react';
import Clock from './Clock';
import StopWatch from './StopWatch';
import './App.css';
import  { Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadLine: 'Empty',
      startFrom: 150,
      newStartFrom: 'Empty'
    }
  }

  changeDeadline(){
    this.setState({deadline: this.state.newDeadLine});
  }

  changeCountDown(){
    this.setState({startFrom: this.state.newStartFrom});
  }

  getClockContent(){
    return (
      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
          <Clock
            deadline={this.state.deadline}
          />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            //onChange={event => console.log('event', event.target.value)}
            onChange={event => this.setState({newDeadLine: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }

  getStopWatchContent(){
    return (
        <div className="App">
          <div className="App-title">
            StopWatch from {this.state.startFrom}
          </div>
          <StopWatch
            startFrom={this.state.startFrom}
          />
        <Form inline>
          <FormControl
            className="StopWatch-input"
            placeholder='new stopwatch'
            onChange={event => console.log('event, event.target.value')}
          />
          <Button onClick={() => this.changeStartFrom()}>
            Start
          </Button>
        </Form>
      </div>
    )
  }

  render() {
    //return (this.getClockContent());
    return (this.getStopWatchContent());
  }
}

export default App;
