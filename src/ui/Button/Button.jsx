const Button = ({
  id,
  onClick,
  isButtonDisable,
  buttonText,
  className
}) => {
  const extendedClassName = `button ${className}`

  return (
    <button id={id} className={extendedClassName} onClick={onClick} disabled={isButtonDisable}>{buttonText}</button>
  )
}

export default Button