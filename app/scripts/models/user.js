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
    return Promise.resolve(this.userApi.postResource(args)).then((data) => {
        this.saveUser(data);
        return Promise.resolve(true);
      }).catch((error) => {
        console.dir(error);
        return Promise.reject(error.responseJSON.username[0]);
      });
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

  getUser(username) {
    // this part is just representative because we need tokens c:
    const errorMessage = "No podemos encontrar tú usuario :(";
    return Promise.resolve(this.userApi.getResourceList()).then((data) => {
      let user = null;
      let result = {};
      for (var i = 0; i < data.length; i++) {
        if (data[i].username === username) {
          user = data[i];
        }
      }
      if (user === null) {
        result = Promise.reject(errorMessage);
      } else {
        result = Promise.resolve(user);
      }
      return result;
    }).catch((error) => {
      return Promise.reject(error);
    });
  }

  loginUser(username) {
    return this.getUser(username).then((data) => {
      this.saveUser(data);
      return Promise.resolve(true);
    }).catch((error) => {
      return Promise.reject(error);
    });
  }

}
