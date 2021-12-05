export const BASE_URL = "https://api.movie.kiars1.nomoredomains.work";

const suite = `https://api.nomoreparties.co`

async function checkResponse (result) {
  const res = await result.json();

  if (result.ok) {
    return res;
  } else {
    return Promise.reject(res)
  }
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then((res) => {
      return checkResponse(res);
    })
    .then((data) => {
      return data;
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => {
      return checkResponse(res);
    })
    .then((data) => {
      return data;
    });
};

export const getUserInfo = () => {
  return fetch(BASE_URL + "/users/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => checkResponse(res));
};

export const updateUserInfo = (name, email) => {
  return fetch(BASE_URL + "/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name, email
    }),
  }).then((res) => checkResponse(res));
};

export const getSavedMovies = () => {
  return fetch(BASE_URL + "/movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => checkResponse(res));
};

export const removeMovie = (movieId) => {
  return fetch(BASE_URL + "/movies/" + movieId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => checkResponse(res));
};

export const saveMovie = (movie) => {
  return fetch(BASE_URL + "/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: suite+movie.image.url,
      trailer: movie.trailerLink,
      thumbnail: movie.trailerLink,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN
    }),
  }).then((res) => checkResponse(res));
};
