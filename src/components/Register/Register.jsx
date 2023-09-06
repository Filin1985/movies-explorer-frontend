import { useContext, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import Button from '../../ui/Button/Button';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../../ui/Form/Form';
import Preloader from '../Movies/Preloader/Preloader';
import { EMAIL_REGEXP, USERNAME_REGEXP } from '../../utils/constants';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'

const Register = ({ error }) => {
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
        <section className='register'>
            <div className='register__header'>
                <Link to='/'>
                    <img src={logo} alt="Логотип" />
                </Link>
                <h2 className="register__title">Добро пожаловать!</h2>
            </div>
            <Form type='register' onSubmit={handleSubmit} onChange={handleChange} values={values} errors={errors}>
                <div className='register__buttons'>
                    <Button buttonText='Зарегистрироваться' className='register__register' />
                    <div className='register__redirect'>
                        <p className='register__text'>Уже зарегистрированы?</p>
                        <Link to='/signin' className='login__account'>Войти</Link>
                    </div>
                </div>
            </Form>
        </section>
    )
}

export default Register