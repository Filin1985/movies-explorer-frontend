import { Link, useLocation } from 'react-router-dom'
import Button from '../../../ui/Button/Button'
import { CARD_ROUTES } from '../../../utils/constants'
import { convertTimeFromMinutes } from '../../../utils/utils'

const MoviesCard = ({ movie, handleSaveMovie, deleteSavedMovie, savedMovies }) => {
    const location = useLocation()


    const isLiked = savedMovies?.some(item => item.movieId === movie.id)

    const thumbnail = movie.image?.url ? `https://api.nomoreparties.co${movie.image?.url}` : movie.image

    if (!movie) return null

    return (
        <li className='card'>
            <article className='card__container'>
                <Link to={movie.trailerLink} target='_blank'>
                    <img className='card__image' src={thumbnail} alt="Изображение фильма" />
                </Link>
                <div className='card__box'>
                    <h2 className='card__title'>{movie.nameRU}</h2>
                    {CARD_ROUTES.includes(location.pathname) ? <Button type='button' className='card__remove' onClick={() => deleteSavedMovie(movie._id)} /> : <Button type='button' className={`card__favorites ${isLiked && 'card__favorites_active'}`} onClick={() => handleSaveMovie(movie)} />}

                </div>
                <p className='card__duration'>{convertTimeFromMinutes(movie.duration)}</p>
            </article>
        </li>
    )
}

export default MoviesCard