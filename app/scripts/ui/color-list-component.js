import React from 'react';
import ColorItemComponent from './color-item-component';

export default class ColorListComponent extends React.Component {
  constructor() {
    super();
  }

  render() {

    var colorItemNodes = this.props.colors.map((color) => {
      return (
        <ColorItemComponent color={color} key={color.url}/>
      );
    });
    return (
      <ul>
        {colorItemNodes}
      </ul>
    );
  }
}
