import React from 'react'
import classNames from 'classNames'
const Form = ({ children, className }) => {
    const classes = classNames(
        '',
        className
    );
    return (
        <form className={classes}>
            { children}
        </form>

    )
}

export default Form
