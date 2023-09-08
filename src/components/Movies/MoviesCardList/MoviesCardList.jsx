import MoviesCard from '../MoviesCard/MoviesCard'

const MoviesCardList = ({ movies, className, type }) => {


    return (
        <div className='cards'>
            <ul className={`cards__elements ${className}`}>
                {movies.map((item, index) => (
                    <MoviesCard key={index} />
                ))}
            </ul>
        </div>
    )
}

export default MoviesCardList