import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'

const Logo = () => {
    return (
        <Link className='logo' to='/'>
            <img src={logo} alt="Логотип" className='logo__image' />
        </Link>
    )
}

export default Logo