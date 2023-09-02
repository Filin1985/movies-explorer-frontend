import React from 'react'
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom'

const PATH_FOR_LIGHT_HEADERS = ['/movies', '/saved-movies', '/profile']

const Header = ({ isLoggedIn }) => {
  const location = useLocation()
  const currentPath = location.pathname

  const headerClassNameType = PATH_FOR_LIGHT_HEADERS.includes(currentPath) ? 'header_background_light' : ''

  return (
    <section className={`header section ${headerClassNameType}`}>
      <Link to='/'>
        <img src={logo} alt="Logo" />
      </Link>
      {isLoggedIn ?
        <div className='header__unauth'>
          <Link className='header__link header__register' to='/signup'>
            Регистрация
          </Link>
          <Link className='header__link header__login' to='/signin'>
            Войти
          </Link>
        </div> :
        <div className='header__auth'>
          <div className='header__list'>
            <Link to='/movies' className={`header__link header__movies ${headerClassNameType}`}>Фильмы</Link>
            <Link to='/saved-movies' className={`header__link header__movies ${headerClassNameType}`}> Сохраненные фильмы</Link>
          </div>
          <Link to='/profile' className='header__link header__account'>
            Аккаунт
          </Link>
        </div>}

    </section>
  )
}

export default Header