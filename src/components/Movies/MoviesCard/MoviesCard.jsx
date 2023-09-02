import image1 from '../../../images/image_1.png'

const MoviesCard = ({ isInFavorites }) => {
    const cardLikeButtonClassName = `card__favorites ${isInFavorites && 'card__favorites_active'
        }`

    return (
        <li className='card'>
            <article className='card__container'>
                <img className='card__image' src={image1} alt="" />
                <div className='card__box'>
                    <h2 className='card__title'>33 слова о дизайне</h2>
                    <button
                        className={cardLikeButtonClassName}
                        type='button'
                    ></button>
                </div>
                <p className='card__duration'>1ч42м</p>
            </article>
        </li>
    )
}

export default MoviesCard