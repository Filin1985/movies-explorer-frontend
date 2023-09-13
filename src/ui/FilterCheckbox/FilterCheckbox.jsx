import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MOVIES_PATH } from '../../utils/constants'

const FilterCheckbox = ({ label, isShortFilterActive, setIsShortFilterActive, className }) => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === MOVIES_PATH) {
            console.log('object');
            setIsShortFilterActive(JSON.parse(localStorage.getItem('isShort')))
        } else {
            setIsShortFilterActive(false)
        }
    }, [])

    const handleToggle = () => {
        if (location.pathname === MOVIES_PATH) {
            localStorage.setItem('isShort', JSON.stringify(!isShortFilterActive))
        }
        setIsShortFilterActive(prevState => !prevState)
    }

    return (
        <div className={`toggle ${className}`}>
            <label className='toggle__button'>
                <input className='toggle__input' type="checkbox" onChange={handleToggle} checked={isShortFilterActive} />
                <span className='toggle__span' />
            </label>
            <p className='toggle__label'>{label}</p>
        </div>

    )
}

export default FilterCheckbox;