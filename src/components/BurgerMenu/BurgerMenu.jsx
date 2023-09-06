import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const BurgerMenu = ({ isBurgerMenu, setIsMenuOpen }) => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        if (width >= 769) {
            setIsMenuOpen(false)
        }
        const handleClose = (event) => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleClose)

        return () => {
            window.removeEventListener('resize', handleClose)
        }
    }, [width, setIsMenuOpen])

    const burgerClassName = isBurgerMenu ? 'burger__content burger__content_open' : 'burger__content'

    return (
        <>
            <div className='burger__overlay'></div>
            <div
                className={burgerClassName}
            >
                <nav className='burger__list'>
                    <NavLink to='/' className={`burger__link`}>Главная</NavLink>
                    <NavLink to='/movies' className={`burger__link`}>Фильмы</NavLink>
                    <NavLink to='/saved-movies' className={`burger__link`}> Сохранённые фильмы</NavLink>
                </nav>
                <Link to='/profile' className='header__link header__account header__account_type_burger'>
                    Аккаунт
                </Link>
            </div>
        </>

    )
}

export default BurgerMenu