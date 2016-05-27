import React from 'react';
import HeaderComponent from '../ui/header-component';

export default class HomeActivity extends React.Component {
  constructor() {
    super();
    this.handleNavigationActivity = this.handleNavigationActivity.bind(this);
  }

  handleNavigationActivity(path) {
    this.context.router.push(path);
  }

  render() {
    return (
      <main>
        <HeaderComponent onSendPath={this.handleNavigationActivity}/>
        {this.props.children}
      </main>
    );
  }
}

HomeActivity.contextTypes = {
  router: React.PropTypes.object
};
