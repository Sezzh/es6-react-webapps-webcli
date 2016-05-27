import React from 'react';
import Colors from 'colors.js';

export default class ColorComponent extends React.Component {
  constructor() {
    super();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRChange = this.handleRChange.bind(this);
    this.handleGChange = this.handleGChange.bind(this);
    this.handleBChange = this.handleBChange.bind(this);
    this.handleOpacityChange = this.handleOpacityChange.bind(this);
    this.handleHexaChange = this.handleHexaChange.bind(this);
    this.handleSaveAction = this.handleSaveAction.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
    this.handleUndoAction = this.handleUndoAction.bind(this);
    this.handleBackAction = this.handleBackAction.bind(this);
    this.state = {
      name: "",
      r: "",
      g: "",
      b: "",
      opacity: "",
      hexa: ""
    };
  }

  handleSaveAction() {
    let newColor = {
      name: this.state.name,
      rgb: `${this.state.r},${this.state.g},${this.state.b}`,
      opacity: this.state.opacity,
      hexa: this.state.hexa
    };
    this.props.onSaveNewColor(newColor);
  }

  handleDeleteAction() {

  }

  handleUndoAction() {

  }

  handleBackAction() {

  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleRChange(e) {
    this.setState({r: e.target.value});
  }

  handleGChange(e) {
    this.setState({g: e.target.value});
  }

  handleBChange(e) {
    this.setState({b: e.target.value});
  }

  handleOpacityChange(e) {
    this.setState({opacity: e.target.value});
  }

  handleHexaChange(e) {
    this.setState({hexa: e.target.value.toUpperCase()});
  }

  render() {
    var headerPreviewColor = {
      backgroundColor: "#" + this.state.hexa
    };
    return (
      <section>
        <header style={headerPreviewColor}>
          <button name="back" onClick={this.handleBackAction}>Back</button>
          <button
            name="delete"
            onClick={this.handleDeleteAction}>Delete</button>
          <button name="undo" onClick={this.handleUndoAction}>Deshacer</button>
          <button name="save" onClick={this.handleSaveAction}>Salvar</button>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder="Nombre..."/>
        </header>
        <input
          type="number"
          value={this.state.r}
          onChange={this.handleRChange}
          placeholder="255"/>
        <input
          type="number"
          value={this.state.g}
          onChange={this.handleGChange}
          placeholder="255"/>
        <input
          type="number"
          value={this.state.b}
          onChange={this.handleBChange}
          placeholder="255"/>
        <input
          type="text"
          value={this.state.opacity}
          onChange={this.handleOpacityChange}
          placeholder="1.0"/>
        <input
          type="text"
          value={this.state.hexa}
          onChange={this.handleHexaChange}
          placeholder="000000"/>
      </section>
    );
  }
}
