import React from 'react';
import ClassNames from 'classname';
import LoginAccountComponent from '../ui/login-account-component';
import CreateAccountComponent from '../ui/create-account-component';
import NotificationComponent from '../ui/notification-component';

export default class LoginActivity extends React.Component {
  constructor() {
    super();
    this.handleHomeRoute = this.handleHomeRoute.bind(this);
    this.handleNotification = this.handleNotification.bind(this);
    this.state = {
      message: ""
    }
  }

  handleHomeRoute() {
    const path = "/home/styleguides";
    this.context.router.push(path);
  }

  handleNotification(message) {
    this.setState({message: message});
  }

  render() {
    return (
      <main>
        <LoginAccountComponent
          onLoginSuccess={this.handleHomeRoute}
          onLoginFail={this.handleNotification}/>
        <CreateAccountComponent
          onCreateAccountSuccess={this.handleHomeRoute}
          onCreateAccountFail={this.handleNotification}/>
        <NotificationComponent message={this.state.message}/>
      </main>
    );
  }
}

LoginActivity.contextTypes = {
  router: React.PropTypes.object
};
