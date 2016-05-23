
var React = window.React = require('react');
var ReactDOM = require('react-dom');
var ClassNames = require('classname');
var LoginComponent = require('./ui/login-component');
var mountNode = document.querySelector('[data-app="main"]');

class MainComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <LoginComponent/>
      </main>
    );
  }
}

ReactDOM.render(<MainComponent />, mountNode);
