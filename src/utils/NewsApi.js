import {
  PAGE_SIZE,
  API_KEY,
  NEWS_URL,
  PROXY_URL,
  SEARCH_INTERVAL,
} from "./constants";

class NewsApi {
  constructor(options) {
    this.headers = options.headers;
    this._apiKey = options.apiKey;
    this._today = options.today;
    this._lastWeek = options.lastWeek;
    this._newsUrl = options.newsUrl;
    this._practicumUrl = options.practicumUrl;
    this._pageSize = options.pageSize;
    this._endpoint = options.endpoint;
    this._proxyUrl = options.proxyUrl;
  }

  searchArticles(keyword) {
    return fetch(
      `${this._newsUrl}` +
        `${keyword}&` +
        `from=${this._lastWeek.toISOString()}&` +
        `to=${this._today.toISOString()}&` +
        `pageSize=${this._pageSize}&` +
        `apiKey=${this._apiKey}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => data.articles)
      .catch((err) => console.log(err));
  }
}

const newsApi = new NewsApi({
  newsUrl: NEWS_URL,
  proxyUrl: PROXY_URL,
  apiKey: API_KEY,
  today: new Date(),
  lastWeek: new Date(Date.now() - SEARCH_INTERVAL),
  pageSize: PAGE_SIZE,
});

export default newsApi;
