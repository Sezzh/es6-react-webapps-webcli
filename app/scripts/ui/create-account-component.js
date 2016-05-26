import React from 'react';
import User from '../models/user';

export default class CreateAccountComponent extends React.Component {
  constructor() {
    super();
    this.handleCreateAccount = this.handleCreateAccount.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);

    this.state = {
      username: "",
      email: "",
      first_name: ""
    };
  }

  handleCreateAccount(e) {
    e.preventDefault();
    e.stopPropagation();
    var userModel = new User();
    userModel.createUser(this.state).then((response) => {
      this.props.onCreateAccountSuccess();
    }).catch((error) => {
      this.props.onCreateAccountFail(error);
    });
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleFirstNameChange(e) {
    this.setState({first_name: e.target.value});
  }

  render() {
    return (
      <section>
        <h1>Crea tú cuenta</h1>
        <p>Sólo necesitamos estos sencillos datos</p>
        <form onSubmit={this.handleCreateAccount}>
          <input
            type="text"
            placeholder="Elige un usuario"
            value={this.state.username}
            name="username"
            onChange={this.handleUsernameChange}/>
          <input
            type="email"
            placeholder="tu@email.com"
            value={this.state.email}
            name="email"
            onChange={this.handleEmailChange}/>
          <input
            type="text"
            placeholder="Tú nombre"
            value={this.state.first_name}
            name="first_name"
            onChange={this.handleFirstNameChange}/>
          <button>Crear cuenta</button>
        </form>
      </section>
    );
  }
}
