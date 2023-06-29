const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.news-explorer.us.to"
    : "http://localhost:3001";

class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _processResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getCurrentUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._processResponse(res));
  }

  getArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => this._processResponse(res));
  }

  saveArticle(data, currentUser) {
    const owner = currentUser._id;

    const { title, text, date, link, image } = data;
    const source = data.source;
    const keyword =
      data.keyword.charAt(0).toUpperCase() + data.keyword.slice(1);

    return fetch(`${this._baseUrl}/articles`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
        owner,
      }),
    }).then((res) => {
      this._processResponse(res);
    });
  }

  removeArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      this._processResponse(res);
    });
  }
}

const mainApi = new Api({
  baseUrl: baseUrl,
});

export default mainApi;
