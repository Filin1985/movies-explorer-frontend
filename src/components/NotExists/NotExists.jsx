import { useNavigate } from 'react-router-dom'
import Button from '../../ui/Button/Button';

const NotExists = () => {
    const navigate = useNavigate()

    return (
        <section className='not-exists'>
            <div className='not-exists__box'>
                <h2 className='not-exists__number'>404</h2>
                <p className='not-exists__text'>Страница не найдена</p>
            </div>
            <Button className='not-exists__back' buttonText='Назад' onClick={() => navigate(-1)} />
        </section>
    )
}

export default NotExists