import React from "react";

import { useState } from 'react'

const FilterCheckbox = ({ label, toggled, className }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
    }

    return (
        <div className={`toggle ${className}`}>
            <label className='toggle__button'>
                <input className='toggle__input' type="checkbox" defaultChecked={isToggled} onClick={callback} />
                <span className='toggle__span' />
            </label>
            <p className='toggle__label'>{label}</p>
        </div>

    )
}

export default FilterCheckbox;