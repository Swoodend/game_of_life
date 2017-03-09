import React, { Component } from 'react';

class StartPauseButton extends Component {
  constructor(props){
    super(props);
    this.startClicked = this.startClicked.bind(this);
    this.pauseClicked = this.pauseClicked.bind(this);
    this.state = {
      startMode: true,
    }
  }

  startClicked(){
    this.props.runGame();
    this.setState({
      startMode: !this.state.startMode
    });
  }

  pauseClicked(){
    this.props.pauseGame();
    this.setState({
      startMode: !this.state.startMode
    });
  }

  render(){
    if (this.state.startMode) {
      var button = <div onClick={this.startClicked} className="button button-run">Start</div>
    } else {
      var button = <div onClick={this.pauseClicked} className="button button-pause">Pause</div>
    }
    return (
      <div>
        {button}
      </div>
    )
  }
}

export default StartPauseButton;
