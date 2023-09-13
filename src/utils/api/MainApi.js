class MainApi {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _request(url, options) {
    return fetch(url, options)
  }

  getUserProfile() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers,
      credentials: "include",
    })
  }

  getAllMovies() {
    return this._request(`${this._url}/movies`, {
      headers: this._headers,
      credentials: "include",
    })
  }

  saveProfileData(newName, newEmail) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: newName,
        email: newEmail,
      }),
      credentials: "include",
    })
  }

  addNewMovie(country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner,) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
        owner,
      }),
      credentials: "include",
    })
  }

  deleteMovie(movieId) {
    return this._request(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: "include",
    })
  }
}

export const mainApi = new MainApi({
  url: 'http://localhost:3001',
  // url: 'https://api.my.places.nomoredomains.sbs',
  headers: {
    'Content-Type': 'application/json',
  },
})
