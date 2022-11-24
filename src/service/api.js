import axios from "axios";

export const api = axios.create({
  baseURL: "https://mer4r740zf.execute-api.us-east-1.amazonaws.com",
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }
});

export const post = async (url, data) => {
  return api.post(url, data);
}

export default class HttpRequest {

  static post(url, data) {
    return api.post(url, data)
    .then((data) => {
      return data.data;
    });
  }

  static put(url, data) {
    return api.put(url, data)
    .then(
      (data) => {
        return data.data;
      });
  }

  static delete(url) {
    return api.delete(url)
    .then((data, error) => {
      if (error) {
        return error;
      }
      return data.data;
    })
  }

  static get(url) {
    return api.get(url)
    .then((data, error) => {
      if (error) {
        return error;
      }
      return data.data;
    })
  }
}