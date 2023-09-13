import { EMAIL_REGEXP, USERNAME_REGEXP } from '../../utils/constants'

const Form = ({
  onSubmit,
  values,
  errors,
  onChange,
  type,
  children,
}) => {

  const isPasswordFieldVisible = type === 'register' || type === 'login'
  const isNameFieldVisible = type === 'register' || type === 'account'

  return (
    <form className={`${type}__form`} action="submit" name={type} noValidate onSubmit={onSubmit}>
      <fieldset className={`${type}__set`}>
        {isNameFieldVisible && <div className={`${type}__box`}>
          <label className={`${type}__field`} htmlFor="name">Имя</label>
          <input
            id="name-input"
            className={`${type}__item ${type}__item_el_name`}
            name="name"
            type="text"
            value={values?.name || ""}
            pattern={USERNAME_REGEXP}
            onChange={onChange}
            placeholder='Введите имя'
            minLength='2'
            maxLength='30'
            required
          />
          <span className={`item-error ${errors?.name && "error_visible"}`}>
            {errors.name}
          </span>
        </div>}
        <div className={`${type}__box`}>
          <label className={`${type}__field`} htmlFor="email">E-mail</label>
          <input
            id="email-input"
            className={`${type}__item ${type}__item_el_email`}
            name="email"
            type="email"
            value={values?.email || ""}
            pattern={EMAIL_REGEXP}
            onChange={onChange}
            placeholder='Введите email'
            required
          />
          <span className={`item-error ${errors?.email && "error_visible"}`}>
            {errors.email}
          </span>
        </div>
        {isPasswordFieldVisible && (
          <div className={`${type}__box`}>
            <label className={`${type}__field`} htmlFor="password">Пароль</label>
            <input
              id="password-input"
              className={`${type}__item ${type}__item_el_password`}
              name="password"
              type="password"
              value={values?.password || ""}
              onChange={onChange}
              placeholder='Введите пароль'
              minLength='8'
              required
            />
            <span className={`item-error ${errors?.password && "error_visible"}`}>
              {errors.password}
            </span>
          </div>
        )}
      </fieldset>
      {children}
    </form>
  )
}

export default Form
