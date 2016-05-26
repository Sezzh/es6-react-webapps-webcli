import $ from 'jquery';

export default class ResourcesApi {
  constructor(resourseName) {
    this.url = `http://localhost:8000/${resourseName}/`;
  }

  getResource(id) {
    let xhr = {
      url: this.url + `${id}`,
      method: "GET"
    };
    return this.apiCall(xhr);
  }

  postResource(data) {
    let xhr = {
      url: this.url,
      method: "POST",
      data: data
    };
    return this.apiCall(xhr);
  }

  getResourceList() {
    let xhr = {
      url: this.url,
      method: "GET"
    };
    return this.apiCall(xhr);
  }

  apiCall(xhr) {
    return $.ajax(xhr);
  }

}
