import Search from '../../ui/Search/Search'
import FilterCheckbox from '../../ui/FilterCheckbox/FilterCheckbox'
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Button from '../../ui/Button/Button'
import SectionDivider from '../../ui/SectionDivider/SectionDivider'
import { useState } from 'react'

const Movies = () => {
    const [savedMovies, setSavedMovies] = useState([...Array(5)])

    return (
        <section className='movies section'>
            <Search className='movies__search' />
            <FilterCheckbox className='movies__toggle'
                toggled={true} label='Короткометражки' />
            <SectionDivider className='movies__divider' />
            <MoviesCardList movies={savedMovies} />
            <Button buttonText='Еще' className='movies__button' />
        </section>
    )
}

export default Movies