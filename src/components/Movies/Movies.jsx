import Search from '../../ui/Search/Search'
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Button from '../../ui/Button/Button'
import SectionDivider from '../../ui/SectionDivider/SectionDivider'
import Preloader from './Preloader/Preloader'
import { useCallback, useEffect, useState } from 'react'
import { MOVIES_PER_PAGE_SIZE, MOVIES_TO_ADD } from '../../utils/constants'

const Movies = ({ movies, isLoading, moviesSearchQuery, handleSearchFilms, isShortFilterActive, setIsShortFilterActive, handleSaveMovie, savedMovies }) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [slicedMovies, setSlicedMovies] = useState([])
    const isMoviesSectionShow = moviesSearchQuery && movies?.length
    const isMoreMoviesButtonVisible = movies?.length > slicedMovies?.length
    console.log(movies);
    const handleResize = useCallback(() => {
        setTimeout(() => {
            setWindowSize(window.innerWidth);
        }, 1000)
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        if (windowSize >= 1280) {
            setSlicedMovies(movies.slice(0, MOVIES_PER_PAGE_SIZE[1280]))
        } else if (windowSize >= 480) {
            setSlicedMovies(movies.slice(0, MOVIES_PER_PAGE_SIZE[480]))
        } else {
            setSlicedMovies(movies.slice(0, MOVIES_PER_PAGE_SIZE[320]))
        }
    }, [movies, windowSize])

    const handleAddMoreMovies = () => {
        const currentSlicedMoviesLength = slicedMovies.length
        if (windowSize >= 1280) {
            setSlicedMovies(movies.slice(0, currentSlicedMoviesLength + MOVIES_TO_ADD[1280]))
        } else {
            setSlicedMovies(movies.slice(0, currentSlicedMoviesLength + MOVIES_TO_ADD[320]))
        }
    }

    if (isLoading) {
        return <Preloader />
    }

    return (
        <section className='movies section'>
            <Search className='movies__search' handleSearchFilms={handleSearchFilms} />
            <FilterCheckbox className='movies__toggle'
                isShortFilterActive={isShortFilterActive} setIsShortFilterActive={setIsShortFilterActive} label='Короткометражки' />
            <SectionDivider className='movies__divider' />
            {isMoviesSectionShow ? (
                <>
                    <MoviesCardList movies={slicedMovies} handleSaveMovie={handleSaveMovie} savedMovies={savedMovies} />
                    {isMoreMoviesButtonVisible && <Button buttonText='Еще' className='movies__button' onClick={handleAddMoreMovies} />}
                </>
            ) : <h1 className='movies__message'>Введите свой запрос!</h1>}
        </section>
    )
}

export default Movies