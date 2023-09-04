const Button = ({
  id,
  onSubmit,
  onClick,
  name,
  isButtonDisable,
  isLoading,
  buttonText,
  children,
  className
}) => {
  const extendedClassName = `button ${className}`

  return (
    <button id={id} className={extendedClassName} onClick={onClick}>{buttonText}</button>
  )
}

export default Button