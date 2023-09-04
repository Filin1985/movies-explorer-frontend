import { Link } from 'react-router-dom'
import Portfolio from '../Portfolio/Portfolio'
import profilePicture from '../../../images/picture.png'

const AboutMe = ({ scroll }) => {
    return (
        <section className='profile' ref={scroll}>
            <h2 className='title'>Студент</h2>
            <article className='profile__card'>
                <div className='profile__info' >
                    <h3 className='profile__name'>Марат</h3>
                    <h4 className='profile__prof'>Фронтенд-разработчик, 38 лет</h4>
                    <p className='profile__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодитьвввв. &shy;С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <Link className='profile__github' to='https://github.com/Filin1985'>Github</Link>
                </div>
                <img className='profile__photo' src={profilePicture} alt="Мое фото" />
            </article>
            <Portfolio />
        </section>
    )
}

export default AboutMe