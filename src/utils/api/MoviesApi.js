class MoviesApi {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _request(url, options) {
    return fetch(url, options)
  }

  getMovies() {
    return this._request(`${this._url}`, {
      headers: this._headers,
    })
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
})
