import promoImage from '../../../images/promo.png'

const Promo = () => {
    return (
        <section className='promo section'>
            <img className='promo__logo' src={promoImage} alt="Promo Logo" />
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

export default Promo