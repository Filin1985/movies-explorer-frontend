import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '../Button/Button'
import { MOVIES_PATH } from '../../utils/constants';

function Search({ className, handleSearchFilms }) {
    const { values, setValues, handleChange } =
        useForm();
    const location = useLocation()


    useEffect(() => {
        if (location.pathname === MOVIES_PATH) {
            const prevQuery = JSON.parse(localStorage.getItem('query'))
            if (prevQuery) {
                setValues({
                    query: prevQuery
                })
            }
        }
    }, [])

    const handleSearchSubmit = (evt) => {
        evt.preventDefault()
        handleSearchFilms(values.query.toLowerCase())
    }

    return (
        <form className={`search ${className}`} onSubmit={handleSearchSubmit}>
            <input
                id='query-input'
                className='search__text'
                type='text'
                placeholder='Фильм'
                value={values?.query || ''}
                onChange={handleChange}
                name="query"
            />
            <Button className='button search__button' isButtonDisable={!values.query ||
                values.query?.length === 0
            } />
        </form>
    )
}

export default Search