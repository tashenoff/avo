import React from 'react'
import classNames from 'classNames'
const Form = ({ children, className }) => {
    const classes = classNames(
        'w-full',
        className
    );
    return (
        <form className={classes}>
            { children}
        </form>

    )
}

export default Form
