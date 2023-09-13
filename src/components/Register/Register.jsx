import useForm from '../../hooks/useForm';
import Button from '../../ui/Button/Button';
import Form from '../../ui/Form/Form';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo';

const Register = ({ handleRegister, isFetching }) => {
    const { values, isValid, errors, handleChange } =
        useForm();

    const handleSubmit = (evt) => {
        evt.preventDefault()
        handleRegister(values.name, values.email, values.password)
    }

    return (
        <section className='register'>
            <div className='register__header'>
                <Logo />
                <h2 className="register__title">Добро пожаловать!</h2>
            </div>
            <Form type='register' onSubmit={handleSubmit} onChange={handleChange} values={values} errors={errors}>
                <div className='register__buttons'>
                    <Button buttonText={isFetching ? 'Регистрация...' : 'Зарегистрироваться'} isButtonDisable={!isValid} className='register__register' />
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