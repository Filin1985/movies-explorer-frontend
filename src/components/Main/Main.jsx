import { useRef } from 'react'
import AboutProject from './AboutProject/AboutProject'
import NavTab from './NavTab/NavTab'
import Promo from './Promo/Promo'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'

const Main = () => {
    const projectRef = useRef(null);
    const techsRef = useRef(null);
    const aboutRef = useRef(null);
    const scrollHandler = (evt) => {
        switch (evt.target.id) {
            case 'project':
                projectRef.current.scrollIntoView({
                    behavior: 'smooth',
                });
                break
            case 'techs':
                techsRef.current.scrollIntoView({
                    behavior: 'smooth',
                });
                break
            case 'about':
                aboutRef.current.scrollIntoView({
                    behavior: 'smooth',
                });
                break
            default:
                return null
        }
    };

    return (
        <section>
            <Promo />
            <NavTab scrollHandler={scrollHandler} />
            <AboutProject scroll={projectRef} />
            <Techs scroll={techsRef} />
            <AboutMe scroll={aboutRef} />
        </section>
    )
}

export default Main