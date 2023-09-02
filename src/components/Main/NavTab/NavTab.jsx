import { Link } from 'react-router-dom'

const NavTab = () => {
    return (
        <section className='navtab'>
            <Link to='#about' className='navtab__link'>О проекте</Link>
            <Link to='#technologies' className='navtab__link'>Технологии</Link>
            <Link className='navtab__link'>Студент</Link>
        </section>
    )
}

export default NavTab