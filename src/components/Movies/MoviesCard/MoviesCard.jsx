import { useLocation } from 'react-router-dom'
import image1 from '../../../images/image_1.png'
import Button from '../../../ui/Button/Button'
import { cardRoutes } from '../../../utils/constants'
import { useState } from 'react'

const MoviesCard = () => {
    const [saved, setSaved] = useState(false)
    const location = useLocation()

    const toggleAddToFavorites = () => {
        console.log(saved);
        setSaved(prevState => !prevState)
    }

    return (
        <li className='card'>
            <article className='card__container'>
                <img className='card__image' src={image1} alt="Добавить в избранное" />
                <div className='card__box'>
                    <h2 className='card__title'>33 слова о дизайне</h2>
                    {cardRoutes.includes(location.pathname) ? <Button type='button' className='card__remove' /> : <Button type='button' className={`card__favorites ${saved && 'card__favorites_active'}`} onClick={toggleAddToFavorites} />}

                </div>
                <p className='card__duration'>1ч42м</p>
            </article>
        </li>
    )
}

export default MoviesCard