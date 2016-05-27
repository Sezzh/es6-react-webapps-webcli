import ResourceApi from '../api/resource-api';

export default class Color {
  constructor() {
    this.resourceName = "colors";
    this.url;
    this.hexa;
    this.opacity;
    this.rgb;
    this.name;
    this.user;
    this.resourceApi = new ResourceApi(this.resourceName);
  }

  saveColorList(colors) {
    if (sessionStorage["colors"]) {
      sessionStorage.removeItem("colors");
    }
    sessionStorage.setItem("colors", JSON.stringify(colors));
  }

  getUserColors(userUri) {
    var errorMessage = "No tienes ningún color creado.";
    return Promise.resolve(this.resourceApi.getResourceList()).then((data) => {
      var userColors = [];
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].user_id.length; j++) {
          if (data[i].user_id[j] === userUri) {
            userColors.push(data[i]);
          }
        }
      }
      this.saveColorList(userColors);
      return Promise.resolve(userColors);
    }).catch((error) => {
      return Promise.reject(errorMessage);
    });
  }

  saveNewColor(color) {
    return Promise.resolve(this.resourceApi.postResource(color))
      .then((data) => {
        console.log(data);
      }).catch((error) => {
        console.log(error);
    });
  }
}
