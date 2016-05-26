import ResourcesApi from '../api/resource-api';

export default class User {
  constructor() {
    this.resourseName = "users";
    this.url;
    this.username;
    this.email;
    this.lastName;
    this.firstName;
    this.userApi = new ResourcesApi(this.resourseName);
  }

  createUser(args) {
    var state = false;
    return Promise.resolve(this.userApi.postResource(args)).then((data) => {
        this.saveUser(data);
        return Promise.resolve(true);
      }).catch((error) => {
        console.dir(error);
        return Promise.reject(error.responseJSON.username[0]);
      });

    /*.then((data) => {
      console.log("llego a user...");
      console.log(data);
      if (data.url !== null) {
        this.saveUser(data);
        state = true;
      }
      return Promise.resolve(state);
    }).catch((error) => {
      console.log("error en catch user:");
      console.log(error);
    });*/
  }

  saveUser(data) {
    if (sessionStorage["user"]) {
      sessionStorage.removeItem("user");
    }
    sessionStorage.setItem("user", JSON.stringify(data));
    this.url = data.url;
    this.username = data.username;
    this.email = data.email;
    if (data.first_name !== null) {
      this.firstName = data.first_name;
    }
    if (data.last_name !== null) {
      this.lastName = data.last_name;
    }
  }

  getUser() {
  }

}
