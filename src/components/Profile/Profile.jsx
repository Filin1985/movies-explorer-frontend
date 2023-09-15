import { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import Button from '../../ui/Button/Button';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Form from '../../ui/Form/Form';

const Profile = ({ isFetching, handleEditProfile, handleLogout }) => {
    const [isEditing, setIsEditing] = useState(false)
    const { values, isValid, errors, setValues, handleChange } =
        useForm();
    const { currentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        setValues({
            name: currentUser.name,
            email: currentUser.email,
        });
        setIsEditing(false)
    }, [setValues, currentUser.name, currentUser.email]);

    const handleSubmit = (evt) => {
        evt.preventDefault()
        handleEditProfile(values.name, values.email)
        setIsEditing(false)
    }

    return (
        <section className='account'>
            <h2 className="account__title">Привет, {currentUser.name}!</h2>
            <Form isDisabled={!isEditing} type='account' onSubmit={handleSubmit} onChange={handleChange} values={values} errors={errors}>
                {isEditing ? (<Button isButtonDisable={!isValid} buttonText={isFetching ? 'Сохранение...' : 'Сохранить'} className='account__save' onSubmit={handleSubmit} />) : (<div className='account__buttons'>
                    <Button buttonText='Редактировать' className='account__register' onClick={() => setIsEditing(true)} />
                    <Button buttonText='Выйти из аккаунта' className='account__account' onClick={handleLogout} />
                </div>)}
            </Form>
        </section>
    )
}

export default Profile