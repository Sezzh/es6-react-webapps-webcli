import React from 'react';
import ColorListComponent from '../ui/color-list-component';
import NavColorComponent from '../ui/nav-color-component';
import ColorPaletteListComponent from '../ui/color-palette-list-component';
import NotificationComponent from '../ui/notification-component';
import ColorComponent from '../ui/color-component';
import Color from '../models/color';
import User from '../models/user';

export default class ColorsActivity extends React.Component {
  constructor() {
    super();
    this.SubmitNewColor = this.SubmitNewColor.bind(this);
    this.state = {
      colors: [],
      colorSelected: {},
      message: ""
    }
    this.userModel = new User();
    this.colorModel = new Color();
  }

  componentDidMount() {
    this.colorModel.getUserColors(this.userModel.url).then((data) => {
      this.setState({colors: data});
    }).catch((error) => {
      console.log(error);
    });
  }

  SubmitNewColor(color) {
    color.user_id = this.userModel.url;
    this.colorModel.saveNewColor(color).then((response) => {
      return Promise.resolve(this.colorModel.getUserColors(this.userModel.url));
    }).then((data) => {
      this.setState({colors: data});
    }).catch((error) => {
      this.setState({message: error});
    });
  }

  render () {
    return (
      <section>
        <NavColorComponent/>
        <ColorListComponent colors={this.state.colors}/>
        <ColorPaletteListComponent/>
        <NotificationComponent message={this.state.message}/>
        <button>+</button>
        <ColorComponent onSaveNewColor={this.SubmitNewColor}/>
      </section>
    );
  }
}
