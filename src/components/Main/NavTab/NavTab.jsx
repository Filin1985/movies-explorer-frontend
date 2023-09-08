import Button from '../../../ui/Button/Button'

const NavTab = ({ scrollHandler }) => {
    return (
        <section className='navtab'>
            <Button id='project' onClick={(evt) => scrollHandler(evt)} buttonText='О проекте' className='navtab__link' />
            <Button id='techs' onClick={(evt) => scrollHandler(evt)} buttonText='Технологии' className='navtab__link' />
            <Button id='about' onClick={(evt) => scrollHandler(evt)} buttonText='Студент' className='navtab__link' />
        </section>
    )
}

export default NavTab