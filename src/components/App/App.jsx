import { useState } from 'react';
import {
  Route,
  Routes,
  Navigate,
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
import { footerRoutes, headerRoutes } from '../../utils/constants';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import NotExists from '../NotExists/NotExists';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({
    name: 'Марат',
    email: 'm.ihsanov2009@yandex.ru'
  })
  const location = useLocation()
  const isFooterVisible = footerRoutes.includes(location.pathname)
  const isHeaderVisible = headerRoutes.includes(location.pathname)

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className='page'>
        {isHeaderVisible && <Header isLoggedIn={isLoggedIn} />}
        <Routes>
          <Route
            path='/signup'
            element={<Register />}
          />
          <Route
            path='/signin'
            element={<Login />}
          />
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='*' element={<NotExists />} />
        </Routes>
        {isFooterVisible && <Footer />}

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
