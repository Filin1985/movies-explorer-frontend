import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies, handleSaveMovie, deleteSavedMovie, savedMovies, className }) => {

    if (!movies) {
        return null
    }

    return (
        <div className='cards'>
            <ul className={`cards__elements ${className}`}>
                {movies.map((movie) => (
                    <MoviesCard key={movie.movieId || movie.id} movie={movie} handleSaveMovie={handleSaveMovie} deleteSavedMovie={deleteSavedMovie} savedMovies={savedMovies} />
                ))}
            </ul>
        </div>
    )
}

export default MoviesCardList