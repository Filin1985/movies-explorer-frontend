import Search from '../../ui/Search/Search'
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox'
import SectionDivider from '../../ui/SectionDivider/SectionDivider'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'
import Preloader from '../Movies/Preloader/Preloader'
import { useEffect } from 'react'

const SavedMovies = ({ movies, isLoading, isShortFilterActive, setIsShortFilterActive, handleSearchFilms, deleteSavedMovie, getSavedMovies }) => {

    useEffect(() => {
        getSavedMovies()
    }, [])

    if (isLoading) {
        return <Preloader />
    }

    return (
        <section className='movies section'>
            <Search className='movies__search' handleSearchFilms={handleSearchFilms} />
            <FilterCheckbox className='movies__toggle'
                isShortFilterActive={isShortFilterActive} setIsShortFilterActive={setIsShortFilterActive} label='Короткометражки' />
            <SectionDivider className='movies__divider' />
            {movies?.length ?
                <MoviesCardList movies={movies} deleteSavedMovie={deleteSavedMovie} />
                : null}
            {!movies?.length && <h1 className='movies__message'>У вас нет ни одного сохраненного фильма!</h1>}
        </section>
    )
}

export default SavedMovies