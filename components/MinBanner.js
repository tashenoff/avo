import React from 'react'
import classnames from 'classNames'

const MinBanner = ({children, className}) => {
    const classes = classnames (
        'flex justify-between px-8 py-5 w-full flex-col',
        className
      );
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default MinBanner
