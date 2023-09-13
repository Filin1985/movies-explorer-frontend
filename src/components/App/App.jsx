import { useCallback, useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import { VALIDATION_MESSAGES_BACKEND, CUSTOM_ERROR_MESSAGE, FOOTER_ROUTES, HEADER_ROUTES, MOVIES_API_BASE_URL, MOVIE_NOT_FOUND_MESSAGE } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/api/MainApi';
import { moviesApi } from '../../utils/api/MoviesApi';
import { auth } from '../../utils/api/Auth'
import NotExists from '../NotExists/NotExists';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Tooltip from '../../ui/Tooltip/Tooltip';
import { filterShortMovies } from '../../utils/utils';

function App() {
  const [isAppReady, setIsAppReady] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: ''
  })
  const [movies, setMovies] = useState([])
  const [savedMovies, setSavedMovies] = useState([])
  const [searchedMovies, setSearchedMovies] = useState(JSON.parse(localStorage.getItem('searchedMovies')) || [])
  const [moviesSearchQuery, setMoviesSearchQuery] = useState(JSON.parse(localStorage.getItem('query')) || '')
  const [isShortFilterActive, setIsShortFilterActive] = useState(false)
  const [tooltip, setTooltip] = useState({
    text: '',
    type: ''
  })

  const location = useLocation()
  const navigate = useNavigate()
  const isFooterVisible = FOOTER_ROUTES.includes(location.pathname)
  const isHeaderVisible = HEADER_ROUTES.includes(location.pathname)

  const handleCloseTooltip = () => {
    setTooltip({
      text: '',
      type: ''
    })
  }

  const checkUser = async () => {
    try {
      const response = await auth.checkUser()
      if (!response.ok) {
        setIsAppReady(false)
        return
      }
      setIsLoggedIn(true)
      navigate(location.pathname)

    } catch (error) {
      console.log(error)
      setIsLoggedIn(false)
    } finally {
      setIsAppReady(true)
    }
  }

  useEffect(() => {
    checkUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  const getUserProfile = async () => {
    setIsLoading(true)
    try {
      const response = await mainApi.getUserProfile()
      if (response.ok) {
        const { user } = await response.json()
        setCurrentUser({
          name: user.name,
          email: user.email
        })
      } else {
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'invalid',
        })
      }

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!isLoggedIn) return
    getUserProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  const handleLogin = async (email, password) => {
    setIsFetching(true)
    try {
      const response = await auth.loginUser(email, password)
      if (response.ok) {
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'valid',
        })
        setIsLoggedIn(true)
        navigate('/movies')
      } else {
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'invalid',
        })
      }
    } catch (error) {
      console.error(
        `При авторизации возникла ошибка: ${error}`
      );
    } finally {
      setIsFetching(false)
    }
  }

  const handleRegister = async (name, email, password) => {
    setIsFetching(true)
    try {
      const response = await auth.registerUser(name, email, password)
      if (response.ok) {
        handleLogin(email, password)
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'valid',
        })
      } else {
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'invalid',
        })
      }
    } catch (error) {
      console.error(
        `При регистрации возникла ошибка: ${error}`
      );
    } finally {
      setIsFetching(false)
    }
  }

  const handleLogout = async () => {
    try {
      const response = await auth.logoutUser()
      if (response.ok) {
        setCurrentUser({
          name: '',
          email: ''
        })
        setIsLoggedIn(false)
        localStorage.removeItem('movies')
        localStorage.removeItem('query')
        localStorage.removeItem('isShort')
        localStorage.removeItem('searchedMovies')
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'valid',
        })
      } else {
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'invalid',
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleEditProfile = async (newName, newEmail) => {
    setIsFetching(true)
    try {
      const response = await mainApi.saveProfileData(newName, newEmail)
      if (response.ok) {
        getUserProfile()
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'valid',
        })
      } else {
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'invalid',
        })
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetching(false)
    }
  }

  const handleFilterMovies = useCallback((movies, searchQuery, isShort) => {
    if (!movies) {
      return null;
    }
    console.log(movies);
    return movies.filter(
      (movie) =>
        (isShort ? movie.duration <= 40 : movie) &&
        (movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) || movie.nameEN.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, []);

  const handleSearchFilms = (query) => {
    setIsLoading(true)
    setMoviesSearchQuery(query)
    const prevQuery = JSON.parse(localStorage.getItem('query'))
    const prevSearch = JSON.parse(localStorage.getItem('searchedMovies'))
    const isShort = JSON.parse(localStorage.getItem('isShort'))
    let filteredMovies = []
    if (prevQuery === query && !prevSearch?.length) {
      setSearchedMovies(prevSearch)
    } else {
      localStorage.setItem('query', JSON.stringify(query))
      filteredMovies = handleFilterMovies(movies, query, isShort)
      localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies))
      setSearchedMovies(filteredMovies)
    }
    if (!filteredMovies.length) {
      setTooltip({
        text: MOVIE_NOT_FOUND_MESSAGE,
        type: 'invalid',
      })
      setIsLoading(false)
      localStorage.removeItem('query')
      return
    }
    setIsLoading(false)
  }

  const handleSearchSavedFilms = (query, isShort) => {
    setSavedMovies(handleFilterMovies(savedMovies, query, isShort))
  }

  const getMoviesFromBeatFilm = async () => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem('movies'))
    setIsLoading(true)
    if (!moviesFromLocalStorage) {
      try {
        const response = await moviesApi.getMovies()
        if (response.ok) {
          const data = await response.json()
          setMovies(data)
          localStorage.setItem('movies', JSON.stringify(data))
        } else {
          setTooltip({
            text: CUSTOM_ERROR_MESSAGE,
            type: 'invalid',
          })
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
      setMovies(moviesFromLocalStorage)
    }
  }

  const handleSaveMovie = async (movie) => {
    const savedMovie = savedMovies.some((item) => item.movieId === movie.id)
    if (savedMovie) {
      const movieToDelete = savedMovies.find((item) => item.movieId === movie.id)._id
      deleteSavedMovie(movieToDelete)
    } else {
      try {
        const response = await mainApi.addNewMovie(
          String(movie.country),
          movie.director,
          movie.duration,
          movie.year,
          movie.description,
          MOVIES_API_BASE_URL + movie.image.url,
          movie.trailerLink,
          movie.nameRU,
          movie.nameEN,
          moviesApi._url + movie.image.formats.thumbnail.url,
          movie.id,
          movie.owner,
        )
        if (response.ok) {
          const { newMovie } = await response.json()
          setSavedMovies(prevMovies => [...prevMovies, newMovie])
          setTooltip({
            text: VALIDATION_MESSAGES_BACKEND[response.status],
            type: 'valid',
          })
        } else {
          setTooltip({
            text: VALIDATION_MESSAGES_BACKEND[response.status],
            type: 'invalid',
          })
        }
      } catch (error) {
        console.log(error);
      }
    }

  }

  const getSavedMovies = async () => {
    setIsLoading(true)
    try {
      const response = await mainApi.getAllMovies()
      if (response.ok) {
        const data = await response.json()
        setSavedMovies(data.movies)
      } else {
        setTooltip({
          text: CUSTOM_ERROR_MESSAGE,
          type: 'invalid',
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteSavedMovie = async (movieId) => {
    try {
      const response = await mainApi.deleteMovie(movieId)
      if (response.ok) {
        setSavedMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'valid',
        })
      } else {
        setTooltip({
          text: VALIDATION_MESSAGES_BACKEND[response.status],
          type: 'invalid',
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!isLoggedIn) return
    getMoviesFromBeatFilm()
    getSavedMovies()
  }, [isLoggedIn])

  return (
    isAppReady && (
      <CurrentUserContext.Provider value={{ currentUser }}>
        <div className='page'>
          {isHeaderVisible && <Header isLoggedIn={isLoggedIn} />}
          <main>
            <Routes>
              <Route
                index
                element={<Main isLoggedIn={isLoggedIn} />}
              />
              <Route path='/movies' element={
                <ProtectedRoute
                  isLoading={isLoading}
                  isLoggedIn={isLoggedIn}
                  moviesSearchQuery={moviesSearchQuery}
                  handleSearchFilms={handleSearchFilms}
                  movies={isShortFilterActive ? filterShortMovies(searchedMovies) : searchedMovies}
                  isShortFilterActive={isShortFilterActive}
                  setIsShortFilterActive={setIsShortFilterActive}
                  handleSaveMovie={handleSaveMovie}
                  savedMovies={savedMovies}
                  element={Movies} />
              } />
              <Route path='/saved-movies' element={
                <ProtectedRoute
                  isLoading={isLoading}
                  isLoggedIn={isLoggedIn}
                  handleSearchFilms={handleSearchSavedFilms}
                  movies={isShortFilterActive ? filterShortMovies(savedMovies) : savedMovies}
                  isShortFilterActive={isShortFilterActive}
                  setIsShortFilterActive={setIsShortFilterActive}
                  getSavedMovies={getSavedMovies}
                  deleteSavedMovie={deleteSavedMovie}
                  element={SavedMovies}
                />} />
              <Route path='/profile' element={
                <ProtectedRoute
                  handleEditProfile={handleEditProfile}
                  isFetching={isFetching}
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                  element={Profile}
                />} />
              {!isLoggedIn && (
                <>
                  <Route
                    path='/signup'
                    element={<Register handleRegister={handleRegister} isFetching={isFetching} />}
                  />
                  <Route
                    path='/signin'
                    element={<Login handleLogin={handleLogin} isFetching={isFetching} />}
                  />
                </>
              )}
              <Route path='*' element={<NotExists />} />
            </Routes>
          </main>
          {isFooterVisible && <Footer />}
          {tooltip.text && <Tooltip text={tooltip.text} type={tooltip.type} closeTooltip={handleCloseTooltip} />}
        </div>
      </CurrentUserContext.Provider>
    )
  );
}

export default App;
