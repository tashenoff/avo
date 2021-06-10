import React from 'react'
import classNames from 'classNames'

    


const Select = ({className, ...props}) => {
    const classes = classNames (
        'p-3 rounded-lg focus:outline-none text-gray-800',
        className
      );

    return (
        <select className={classes}>
        <option value="option1">ЭССЭ (Все категории)</option>
        <option value="option2">Написание сочинений</option>
        <option selected value="option3">Бизнес план</option>
        <option value="option4">Биография</option>
      </select>
    )
}

export default Select
