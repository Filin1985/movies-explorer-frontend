import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer section section_background_gray'>
            <h5 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h5>
            <div className='footer__container'>
                <p className='footer__copyright'>
                    &copy; 2023
                </p>
                <ul className='footer__list'>
                    <li className='footer__item'>
                        <Link className='footer__link' to='https://practicum.yandex.ru/'>Яндекс.Практикум</Link>
                    </li>
                    <li className='footer__item'>
                        <Link className='footer__link' to='https://github.com/Filin1985'>Github</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer