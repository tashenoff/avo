import React from 'react'
import classnames from 'classnames'

const Button = ({ title, className, onClick, variant, children  }) => {

  const classes = classnames (
    'px-5 py-3 rounded-lg focus:outline-none h-12',
    className,
    variant
  );
  return (
    <button onClick={onClick} className={classes}>{title}{children}</button>
  )
}

export default Button
