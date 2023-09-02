import { Link } from 'react-router-dom'
import linkSVG from '../../../images/link.svg'

const Portfolio = () => {
    return (
        <article className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <h5 className='portfolio__subtitle'>Статичный сайт</h5>
                    <Link to='https://github.com/Filin1985/how-to-learn' className='portfolio__link'>
                        <img className='portfolio__svg' src={linkSVG} alt="Ссылка" />
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <h5 className='portfolio__subtitle'>Адаптивный сайт</h5>
                    <Link to='https://gracious-thompson-c3858e.netlify.app/' className='portfolio__link'>
                        <img className='portfolio__svg' src={linkSVG} alt="Ссылка" />
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <h5 className='portfolio__subtitle'>Одностраничное приложение</h5>
                    <Link to='https://spontaneous-dango-9d7aae.netlify.app/' className='portfolio__link'>
                        <img className='portfolio__svg' src={linkSVG} alt="Ссылка" />
                    </Link>
                </li>
            </ul>
        </article >
    )
}

export default Portfolio