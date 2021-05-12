import React from 'react'
import classnames from 'classnames'


const Content = ({children, className}) => {
    const classes = classnames (
        'xl:container mx-auto p-4',
        className
      );

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Content
