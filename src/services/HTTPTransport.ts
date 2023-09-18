import { Url } from "../constant/url";

const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

interface Options {
  data?: any;
  headers?: Record<string, string>;
  timeout?: number;
  responseType?: ResponseType;
  method?: string;
}

type HTTPMethod = (url: string, data?: any) => Promise<unknown>;

export default class HTTPTransport {
  static BASE_URL = Url.BASE;
  protected _baseUrl: string;

  constructor(url: string) {
    this._baseUrl = `${HTTPTransport.BASE_URL}${url}`;
  }

  static isObject(value: unknown) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }

  static queryStringify(data: any): string {
    if (!this.isObject(data)) {
      throw new Error("Data must be an object");
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
      const value = data[key];
      const end = index < keys.length - 1 ? "&" : "";
      return `${result}${key}=${value}${end}`;
    }, "?");
  }

  public get: HTTPMethod = (url, options = {}) => {
    return this.request(
      !!options.data
        ? `${this._baseUrl + url}${HTTPTransport.queryStringify(options.data)}`
        : this._baseUrl + url,
      { ...options, method: METHODS.GET }
    );
  };

  public post: HTTPMethod = (url, options = {}) => {
    return this.request(this._baseUrl + url, {
      method: METHODS.POST,
      data: options,
    });
  };

  public put: HTTPMethod = (url, options = {}) => {
    return this.request(this._baseUrl + url, {
      method: METHODS.PUT,
      data: options,
    });
  };

  public delete: HTTPMethod = (url, options = {}) => {
    return this.request(this._baseUrl + url, {
      method: METHODS.DELETE,
      data: options,
    });
  };

  private request<Response>(
    url: string,
    options: Options = { method: METHODS.GET }
  ): Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method!, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.onabort = () => reject({ reason: "abort" });
      xhr.onerror = () => reject({ reason: "network error" });
      xhr.ontimeout = () => reject({ reason: "timeout" });

      if (data instanceof FormData === false) {
        xhr.setRequestHeader("Content-Type", "application/json");
      }

      xhr.withCredentials = true;
      xhr.responseType = "json";

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(
          data instanceof FormData === false ? JSON.stringify(data) : data
        );
      }
    });
  }
}
