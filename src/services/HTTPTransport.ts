const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

type RequestOptions = {
  headers?: { [key: string]: string };
  method?: HTTPMethod | string;
  data?: any;
};

function queryStringify(data: { [key: string]: any }): string {
  if (typeof data !== "object") {
    throw new Error("error");
  }

  const keys = Object.keys(data);
  return keys.reduce(
    (result, key, index) =>
      `${result}${key}=${data[key]}${index < keys.length - 1 ? "&" : ""}`,
    "?"
  );
}

export default class HTTPTransport {
  get = (
    url: string,
    options: RequestOptions = {},
    timeout: number = 5000
  ): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: METHODS.GET }, timeout);

  post = (
    url: string,
    options: RequestOptions = {},
    timeout: number = 5000
  ): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: METHODS.POST }, timeout);

  put = (
    url: string,
    options: RequestOptions = {},
    timeout: number = 5000
  ): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: METHODS.PUT }, timeout);

  delete = (
    url: string,
    options: RequestOptions = {},
    timeout: number = 5000
  ): Promise<XMLHttpRequest> =>
    this.request(url, { ...options, method: METHODS.DELETE }, timeout);

  request = (
    url: string,
    options: RequestOptions = {},
    timeout: number = 5000
  ): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject("error");
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open(
        method,
        method === METHODS.GET && !!data ? `${url}${queryStringify(data)}` : url
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
