const Button = ({
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
    <button className={extendedClassName} onClick={onClick}>{buttonText}</button>
  )
}

export default Button