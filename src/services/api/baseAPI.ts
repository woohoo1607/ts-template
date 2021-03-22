import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "780eab752dc5965944a9a55c62d383ab";

class BaseAPI {
  baseUrl: string;
  instance: AxiosInstance;
  defaultParams: { api_key: typeof API_KEY };
  constructor() {
    this.baseUrl = BASE_URL;
    this.instance = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.defaultParams = {
      api_key: API_KEY,
    };
  }

  // TODO: remove any. (maybe use generics?)
  async get(url: string, params?: any) {
    return await this.instance
      .get(url, { params: { ...this.defaultParams, ...params } })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  async post(url: string, data: any) {
    return await this.instance
      .post(url, { data }, { params: this.defaultParams })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  async put(url: string, data: any) {
    return await this.instance
      .put(url, { data }, { params: this.defaultParams })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  async delete(url: string, data?: any) {
    return await this.instance
      .delete(url, { data, params: this.defaultParams })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  private handleResponse(response: AxiosResponse) {
    return response.data;
  }

  private handleError(error: AxiosError) {
    if (error.response) {
      // return { error: error.response.data };
      throw new Error(error.response.data.error);
    } else if (error.request) {
      // return { error: error.request.responseText };
      throw new Error(error.request.responseText);
    } else {
      // return { error: error.message };
      throw new Error(error.message);
    }
  }
}

export const baseAPI = new BaseAPI();
