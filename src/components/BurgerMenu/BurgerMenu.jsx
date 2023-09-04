import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const BurgerMenu = (props) => {
    return (
        <>
            <div className='burger__overlay'></div>
            <div
                className={
                    props.isBurgerMenu
                        ? 'burger__content burger__content_open'
                        : 'burger__content'
                }
            >
                <nav className='burger__list'>
                    <NavLink to='/' className={`burger__link`}>Главная</NavLink>
                    <NavLink to='/movies' className={`burger__link`}>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className={`burger__link`}> Сохранённые фильмы</NavLink>
                </nav>
                <Link to='/profile' className='header__link header__account'>
                    Аккаунт
                </Link>
            </div>
        </>

    )
}

export default BurgerMenu