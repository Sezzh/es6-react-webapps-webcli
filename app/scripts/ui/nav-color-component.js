import React from 'react';
import { Link } from 'react-router';

export default class NavColorComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <nav>
        <button>Colores</button>
        <button>Paletas de color</button>
      </nav>
    );
  }
}
