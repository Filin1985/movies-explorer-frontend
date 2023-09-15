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
                    <p className='profile__text'>Я живу в Москве. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. &shy;С 2017 года работал в компании Роснефть. Сейчас работаю в банке фронтенд разработчиком в банке Дом.РФ.</p>
                    <Link className='profile__github' target='_blank' to='https://github.com/Filin1985'>Github</Link>
                </div>
                <img className='profile__photo' src={profilePicture} alt="Фото автора" />
            </article>
            <Portfolio />
        </section>
    )
}

export default AboutMe