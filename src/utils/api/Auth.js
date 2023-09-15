class Auth {
  constructor({ url }) {
    this._url = url
  }

  _request(url, options) {
    return fetch(url, options)
  }

  registerUser(name, email, password) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
  }

  loginUser(email, password) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    })
  }

  logoutUser() {
    return this._request(`${this._url}/signout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
    })
  }

  checkUser() {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: "include",
    })
  }
}

export const auth = new Auth({
  // url: 'https://api.my.places.nomoredomains.sbs',
  url: 'http://localhost:3001',
})
