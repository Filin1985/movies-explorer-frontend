import { Link, useLocation } from 'react-router-dom'
import { cardRoutes } from '../../utils/constants'

const Footer = () => {
    const location = useLocation()

    const savedMoviesClass = cardRoutes.includes(location.pathname) ? 'footer section_background_gray footer__height_more' : 'footer section_background_gray'

    return (
        <footer className={savedMoviesClass}>
            <h5 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h5>
            <div className='footer__container'>
                <p className='footer__copyright'>
                    &copy;2023
                </p>
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <Link className='footer__link' target='_blank' to='https://practicum.yandex.ru/'>Яндекс.Практикум</Link>
                    </li>
                    <li className='footer__item'>
                        <Link className='footer__link' target='_blank' to='https://github.com/Filin1985'>Github</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer