import React from 'react'
import classnames from 'classnames'
const Form = ({ children, className }) => {
    const classes = classnames(
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
