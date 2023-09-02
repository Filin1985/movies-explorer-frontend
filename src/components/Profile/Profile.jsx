import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import Button from '../../ui/Button/Button';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../../ui/Form/Form';
import Preloader from '../Movies/Preloader/Preloader';

const Profile = ({ error }) => {
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
        <section className='account'>
            <h2 className="account__title">Привет, Марат!</h2>
            <Form type='account' onSubmit={handleSubmit} onChange={handleChange} values={values} errors={errors}>
                <div className='account__buttons'>
                    <Button buttonText='Редактировать' className='account__register' />
                    <Link to='/signin' className='account__account'>Выйти из аккаунта</Link>
                </div>
            </Form>
        </section>
    )
}

export default Profile