import { Link } from 'react-router-dom'
import linkSVG from '../../../images/link.svg'

const Portfolio = () => {
    return (
        <article className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <Link to='https://github.com/Filin1985/how-to-learn' target='_blank' className='portfolio__link'>
                        <h5 className='portfolio__subtitle'>Статичный сайт</h5>
                        <img className='portfolio__svg' src={linkSVG} alt="Ссылка на статичный сайт" />
                    </Link>
                </li>
                <li className='portfolio__item'>
                    <Link to='https://gracious-thompson-c3858e.netlify.app/' target='_blank' className='portfolio__link'>
                        <h5 className='portfolio__subtitle'>Адаптивный сайт</h5>
                        <img className='portfolio__svg' src={linkSVG} alt="Ссылка на адаптивный сайт" />
                    </Link>
                </li>
                <li to='https://spontaneous-dango-9d7aae.netlify.app/' className='portfolio__item'>
                    <Link to='https://spontaneous-dango-9d7aae.netlify.app/' target='_blank' className='portfolio__link'>
                        <h5 className='portfolio__subtitle'>Одностраничное приложение</h5>
                        <img className='portfolio__svg' src={linkSVG} alt="Ссылка на приложение" />
                    </Link>
                </li>
            </ul>
        </article >
    )
}

export default Portfolio