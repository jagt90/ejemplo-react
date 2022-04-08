import axios from 'axios';

const defaultIntercerptos = {
  requestError: (error) => {
    console.log(error.response);
    return Promise.reject(error);
  },
  responseError: (error) => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    console.log(error.response);
    if (!expectedError) {
      // TODO: implement logger service
      // TODO: show generic error
    }

    return Promise.reject(error);
  },
};

class HttpClient {
  #serviceInstance;
  #hasDefaultInterceptors;

  constructor(options, hasDefaultInterceptors = true) {
    this.#serviceInstance = axios.create(options);

    this.get = this.#serviceInstance.get;
    this.post = this.#serviceInstance.post;
    this.put = this.#serviceInstance.put;
    this.delete = this.#serviceInstance.delete;

    this.#hasDefaultInterceptors = hasDefaultInterceptors;
  }

  setRequestInterceptors(onFulfilled, onRejected) {
    this.#serviceInstance.interceptors.request.use(onFulfilled, onRejected);
  }

  setResponseInterceptors(onFulfilled, onRejected) {
    this.#serviceInstance.interceptors.response.use(onFulfilled, onRejected);
  }

  init() {
    if (this.#hasDefaultInterceptors) {
      this.setResponseInterceptors(null, defaultIntercerptos.responseError);
    }

    return this;
  }
}

export default HttpClient;

export const { requestError, responseError } = defaultIntercerptos;
