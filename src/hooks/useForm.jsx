import { useCallback, useState } from 'react'

function useForm() {
    const [values, setValues] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setIsValid, setErrors]
    );

    return {
        values,
        isValid,
        errors,
        setValues,
        setIsValid,
        handleChange,
        resetForm,
    };
}

export default useForm