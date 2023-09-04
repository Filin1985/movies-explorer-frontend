import { useLocation } from 'react-router-dom'
import image1 from '../../../images/image_1.png'
import Button from '../../../ui/Button/Button'
import { cardRoutes } from '../../../utils/constants'

const MoviesCard = ({ isInFavorites }) => {
    const location = useLocation()

    const cardLikeButtonClassNameFavorite = `card__favorites ${isInFavorites && 'card__favorites_active'
        }`
    const cardRemoveButtonClassNameFavorite = cardRoutes.includes(location.pathname) ? 'card__remove' : cardLikeButtonClassNameFavorite

    return (
        <li className='card'>
            <article className='card__container'>
                <img className='card__image' src={image1} alt="" />
                <div className='card__box'>
                    <h2 className='card__title'>33 слова о дизайне</h2>
                    <Button type='button' className={cardRemoveButtonClassNameFavorite} />
                </div>
                <p className='card__duration'>1ч42м</p>
            </article>
        </li>
    )
}

export default MoviesCard