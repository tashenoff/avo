import React from 'react'
import classNames from 'classNames'

const Button = ({ title, className, onClick, ...attrs }) => {

  const classes = classNames (
    'px-5 py-3 rounded-lg',
    className
  );
  return (
    <button {...attrs} onClick={onClick} className={classes}>{title}</button>
  )
}

export default Button
