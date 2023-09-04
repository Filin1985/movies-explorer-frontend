import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm';
import Button from '../../ui/Button/Button';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../../ui/Form/Form';
import Preloader from '../Movies/Preloader/Preloader';

const Profile = ({ error }) => {
    const [isEditing, setIsEditing] = useState(false)
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

    const handleEditProfile = () => {
        setIsEditing(true)
    }

    if (!values.name) {
        return <Preloader />
    }

    return (
        <section className='account'>
            <h2 className="account__title">Привет, Марат!</h2>
            <Form type='account' onSubmit={handleSubmit} onChange={handleChange} values={values} errors={errors}>
                {isEditing ? (<Button buttonText='Сохранить' className='account__save' onClick={handleEditProfile} />) : (<div className='account__buttons'>
                    <Button buttonText='Редактировать' className='account__register' onClick={handleEditProfile} />
                    <Link to='/signin' className='account__account'>Выйти из аккаунта</Link>
                </div>)}
            </Form>
        </section>
    )
}

export default Profile