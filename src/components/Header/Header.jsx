import React, { useState } from 'react'
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const PATH_FOR_LIGHT_HEADERS = ['/movies', '/saved-movies', '/profile']

const Header = ({ isLoggedIn }) => {
  const location = useLocation()
  const currentPath = location.pathname

  const headerClassNameType = PATH_FOR_LIGHT_HEADERS.includes(currentPath) ? 'header_background_light' : ''

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isBurgerMenu = isLoggedIn && isMenuOpen
  const headerBurgerClassType = headerClassNameType ? 'button header__burger header__burger_black' : 'button header__burger'

  return (
    <header className={`header ${headerClassNameType}`}>
      <Link to='/'>
        <img src={logo} alt="Logo" className='header__logo' />
      </Link>
      {isLoggedIn ?
        <>
          <div className='header__list header_display_none'>
            <Link to='/movies' className={`header__link header__movies ${headerClassNameType}`}>Фильмы</Link>
            <Link to='/saved-movies' className={`header__link header__movies ${headerClassNameType}`}> Сохраненные фильмы</Link>
          </div>
          <Link to='/profile' className='header__link header__account header_display_none'>
            Аккаунт
          </Link>
          <button
            className={
              isBurgerMenu
                ? `${headerBurgerClassType} header__burger_open`
                : headerBurgerClassType
            }
            type='button'
            aria-label='menu'
            onClick={handleOpenMenu}
          ></button>
        </> : <div className='header__unauth'>
          <Link className='header__link header__register' to='/signup'>
            Регистрация
          </Link>
          <Link className='header__link header__login' to='/signin'>
            Войти
          </Link>
        </div>}
      {isMenuOpen && <BurgerMenu isBurgerMenu={isBurgerMenu} setIsMenuOpen={setIsMenuOpen} />}
    </header>
  )
}

export default Header