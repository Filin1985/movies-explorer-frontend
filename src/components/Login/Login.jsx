import useForm from '../../hooks/useForm';
import Button from '../../ui/Button/Button';
import Form from '../../ui/Form/Form';
import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo/Logo';

const Login = ({ handleLogin, isFetching }) => {
    const { values, isValid, errors, handleChange } =
        useForm();

    const handleSubmit = (evt) => {
        evt.preventDefault()
        handleLogin(values.email, values.password)
    }

    return (
        <section className='login'>
            <div className='login__header'>
                <Logo />
                <h2 className="login__title">Рады видеть!</h2>
            </div>
            <Form type='login' onSubmit={handleSubmit} onChange={handleChange} values={values} errors={errors}>
                <div className='login__buttons'>
                    <Button buttonText={isFetching ? 'В процессе...' : 'Войти'} className='login__login' isButtonDisable={!isValid} />
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