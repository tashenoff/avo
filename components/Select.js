import React from 'react'
import classNames from 'classNames'

    


const Select = ({className, ...props}) => {
    const classes = classNames (
        'p-3 rounded-lg focus:outline-none text-gray-800',
        className
      );

    return (
        <select className={classes}>
        <option value="option1">option1</option>
        <option value="option2">option2</option>
        <option selected value="option3">option3</option>
        <option value="option4">option4</option>
      </select>
    )
}

export default Select
