const API_KEY = "f437a1ffb4624432868fd0df25f99f10";
const NEWS_URL = `https://newsapi.org/v2/everything?q=`;
const PROXY_URL = `https://nomoreparties.co/news/v2/everything?q=`;
const INITIAL_CARDS = 3;
const PAGE_SIZE = 100;
const SEARCH_INTERVAL = 7 * 24 * 3600 * 1000;

export {
  PAGE_SIZE,
  INITIAL_CARDS,
  API_KEY,
  NEWS_URL,
  PROXY_URL,
  SEARCH_INTERVAL,
};
