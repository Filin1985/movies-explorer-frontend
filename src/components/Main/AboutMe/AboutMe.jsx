import { Link } from 'react-router-dom'
import Portfolio from '../Portfolio/Portfolio'
import profilePicture from '../../../images/picture.png'

const AboutMe = () => {
    return (
        <section className='profile section'>
            <h2 className='title'>Студент</h2>
            <article className='profile__card'>
                <div className='profile__info' >
                    <h3 className='profile__name'>Марат</h3>
                    <h4 className='profile__prof'>Фронтенд-разрабочик, 38 лет</h4>
                    <p className='profile__text'>Я родился в Сургуте, но сейчас живу в Москве. Закончил факультет разработки нефтяных месторождений ТюмГНГУ. У меня есть жена и двое детей. Я люблю слушать музыку, а ещё увлекаюсь плаванием. Недавно начал кодить. С 2017 года работал в компании «Роснефть».</p>
                    <Link className='profile__github' to='https://github.com/Filin1985'>Github</Link>
                </div>
                <img className='profile__photo' src={profilePicture} alt="Мое фото" />
            </article>
            <Portfolio />
        </section>
    )
}

export default AboutMe