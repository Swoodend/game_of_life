import React, { Component } from 'react';

class Cell extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.changeColor(this.props.row, this.props.column);
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        style={this.props.style}
        className="cell">
      </div>
    );
  }
}

export default Cell;
