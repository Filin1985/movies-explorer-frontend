import { useContext, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import Button from '../../ui/Button/Button';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../../ui/Form/Form';
import Preloader from '../Movies/Preloader/Preloader';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

const Login = ({ error }) => {
    const { values, isValid, errors, setValues, setIsValid, handleChange } =
        useForm();
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        });
    }, [setValues, currentUser.name, currentUser.email]);

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    if (!values.name) {
        return <Preloader />
    }

    return (
        <section className='login'>
            <div className='login__header'>
                <Link to='/'>
                    <img className='login__logo' src={logo} alt="Logo" />
                </Link>
                <h2 className="login__title">Рады видеть!</h2>
            </div>
            <Form type='login' onSubmit={handleSubmit} onChange={handleChange} values={values} errors={errors}>
                <div className='login__buttons'>
                    <Button buttonText='Войти' className='login__login' />
                    <div className='login__redirect'>
                        <p className='login__text'>Ещё не зарегистрированы?</p>
                        <Link to='/signup' className='login__account'>Регистрация</Link>
                    </div>
                </div>
            </Form>
        </section>
    )
}

export default Login