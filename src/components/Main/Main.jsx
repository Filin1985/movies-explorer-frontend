import AboutProject from './AboutProject/AboutProject'
import NavTab from './NavTab/NavTab'
import Promo from './Promo/Promo'
import Techs from './Techs/Techs'
import AboutMe from './AboutMe/AboutMe'

const Main = () => {
    return (
        <main>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
        </main>
    )
}

export default Main