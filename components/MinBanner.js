import React from 'react'
import classNames from 'classNames'

const MinBanner = ({children, className}) => {
    const classes = classNames (
        'flex justify-between px-8 py-5 w-full',
        className
      );
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default MinBanner
