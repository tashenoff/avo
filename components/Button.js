import React from 'react'
import classnames from 'classnames'

const Button = ({ title, className, onClick, ...attrs }) => {

  const classes = classnames (
    'px-5 py-3 rounded-lg focus:outline-none h-12',
    className
  );
  return (
    <button {...attrs} onClick={onClick} className={classes}>{title}</button>
  )
}

export default Button
