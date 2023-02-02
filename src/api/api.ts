import qs from 'qs';

class Http {
  baseUrl: string;
  unauthorized: (() => void) | undefined;
  errorMessage: any;

  static async parseResponse(response: Response, responseType: string) {
    switch (responseType) {
      case 'json':
        return response.json();
      case 'blob':
        return response.blob();
      default:
        return response;
    }
  }

  constructor(options: { baseUrl: string }) {
    this.baseUrl = options.baseUrl;
    Object.assign(this, options);
  }

  async request(
    url: string,
    { headers = {}, method = 'GET', responseType = 'json', isPublic = false, data }: any = {},
  ): Promise<any> {
    url = this.baseUrl + url;
    const opts: any = { method };

    if (method === 'GET') {
      if (data) {
        let query;
        [url, query] = url.split('?');
        url += '?' + qs.stringify({ ...qs.parse(query), ...data }, { indices: false, skipNulls: true });
      }
    } else if (typeof FormData !== 'undefined' && data instanceof FormData) {
      opts.body = data;
    } else {
      opts.body = JSON.stringify(data);
      headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...headers,
      };
    }

    if (!isPublic) headers.token = window.storage.get('access_token');

    const response = await fetch(url, { ...opts, headers });
    if (response.status === 401) setTimeout(() => this.unauthorized && this.unauthorized());
    if (!response.ok) {
      this.errorMessage(response);
      return Promise.reject(response);
    }

    try {
      return await Http.parseResponse(response, responseType);
    } catch (e) {
      this.errorMessage({ status: 'BAD_PARSING' });
      return Promise.reject(null);
    }
  }

  get(url: string, opts?: { isPublic?: boolean; responseType?: string }): Promise<any> {
    return this.request(url, { ...opts, method: 'GET' });
  }

  post(url: string, opts?: { isPublic?: boolean; responseType?: string; data?: any }): Promise<any> {
    return this.request(url, { ...opts, method: 'POST' });
  }

  put(url: string, opts?: { isPublic?: boolean; responseType?: string; data?: any }): Promise<any> {
    return this.request(url, { ...opts, method: 'PUT' });
  }

  del(url: string, opts?: { isPublic?: boolean; responseType?: string }): Promise<any> {
    return this.request(url, { ...opts, method: 'DELETE' });
  }
}

export const api = new Http({
  baseUrl: 'https://lochem.be-better.api.ledgerleopard.com',
});
