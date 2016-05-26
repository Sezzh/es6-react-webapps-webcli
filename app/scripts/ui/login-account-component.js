import React from 'react';


export default class LoginAccountComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <h1>Bienvenido a sMood</h1>
        <form>
          <input
            type="text"/>
          <input
            type="password"/>
          <button>Inicia sesión</button>
        </form>
        <button
          onClick={this.showCreateAccountComponent}>Crea una cuenta</button>
      </section>
    );
  }
}
