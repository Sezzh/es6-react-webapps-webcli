import React from 'react';
import User from '../models/user';


export default class LoginAccountComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
    this.handleLoginProcess = this.handleLoginProcess.bind(this);
    this.showCreateAccountComponent =
      this.showCreateAccountComponent.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);

  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handleLoginProcess(e) {
    e.preventDefault();
    e.stopPropagation();
    var userModel = new User();
    userModel.loginUser(this.state.username).then((response) => {
      this.props.onLoginSuccess();
    }).catch((error) => {
      this.props.onLoginFail(error);
    });

  }

  showCreateAccountComponent(e) {
    console.log("show form!");
  }

  render() {
    return (
      <section>
        <h1>Bienvenido a sMood</h1>
        <form onSubmit={this.handleLoginProcess}>
          <input
            type="text"
            placeholder="Cúal es tú usuario?"
            value={this.state.username}
            onChange={this.handleUsernameChange}/>
          <button>Inicia sesión</button>
        </form>
        <button
          onClick={this.showCreateAccountComponent}>
          Crea una cuenta
        </button>
      </section>
    );
  }
}
