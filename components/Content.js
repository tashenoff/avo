import React from 'react'
import classNames from 'classNames'


const Content = ({children, className}) => {
    const classes = classNames (
        'xl:container mx-auto',
        className
      );

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Content
