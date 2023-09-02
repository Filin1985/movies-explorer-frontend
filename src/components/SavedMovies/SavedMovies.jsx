import Search from '../../ui/Search/Search'
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox'
import SectionDivider from '../../ui/SectionDivider/SectionDivider'
import { useState } from 'react'
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'

const SavedMovies = () => {
    const [savedMovies, setSavedMovies] = useState([...Array(3)])

    return (
        <section className='movies section'>
            <Search className='movies__search' />
            <FilterCheckbox className='movies__toggle'
                toggled={true} label='Короткометражки' />
            <SectionDivider className='movies__divider' />
            <MoviesCardList movies={savedMovies} className='movies__saved' type='saved' />
        </section>
    )
}

export default SavedMovies