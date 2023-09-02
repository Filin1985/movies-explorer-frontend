import Button from '../Button/Button'

function Search({ className }) {
    return (
        <section className={`search ${className}`}>
            <input
                className='search__text'
                type='text'
                placeholder='Фильм'
            />
            <Button className='button search__button' />
        </section>
    )
}

export default Search