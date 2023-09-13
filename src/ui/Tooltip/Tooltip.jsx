import { createPortal } from 'react-dom'
import Button from '../Button/Button'

const tooltipRoot = document.getElementById('tooltipRoot')

const Tooltip = ({ text, type, closeTooltip }) => {
    setTimeout(() => {
        closeTooltip()
    }, 10000)

    return createPortal(
        <div className={type === 'invalid' ? 'tooltip tooltip_invalid' : 'tooltip tooltip_valid'}>
            <span className='tooltip__close'>
                <Button className='button button_tooltip_close' onClick={closeTooltip} />
            </span>
            <p className={type === 'invalid' ? 'tooltip__text tooltip__text_invalid' : 'tooltip__text tooltip__text_valid'}>{text}</p>
        </div>,
        tooltipRoot
    )
}

export default Tooltip