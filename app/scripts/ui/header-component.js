import React from 'react';


export default class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.handleActivityChange = this.handleActivityChange.bind(this);
  }

  handleActivityChange(e) {
    e.preventDefault();
    e.stopPropagation();
    const path = `/home/${e.target.name}`
    this.props.onSendPath(path);
  }

  render() {
    return (
      <header>
        <button>back</button>
        <h1>sMood</h1>
        <nav>
          <button
            onClick={this.handleActivityChange}
            name="typographys">T</button>
          <button
            onClick={this.handleActivityChange}
            name="colors">C</button>
          <button>ops</button>
          <div>
            <button>Salir</button>
          </div>
        </nav>
      </header>
    );
  }
}
