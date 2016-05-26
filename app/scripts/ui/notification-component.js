import React from 'react';

export default class NotificationComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h4>Notificación:</h4>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
