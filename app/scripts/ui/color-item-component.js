import React from 'react';

export default class ColorItemComponent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e.target);
  }

  render() {
    var divStyle = {
      background: "#" + this.props.color.hexa
    };
    return (
      <li>
        <div
          style={divStyle}
          onClick={this.handleClick}>{this.props.color.name}</div>
      </li>
    );
  }
}
