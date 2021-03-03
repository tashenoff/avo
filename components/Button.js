import React from 'react'
// import classNames from 'classNames'

const Button = ({ title, className, onClick, ...attrs }) => {

  // const classes = classNames (
  //   'px-5 py-3 rounded-lg focus:outline-none h-12',
  //   className
  // );
  return (
    <button {...attrs} onClick={onClick} className={className}>{title}</button>
  )
}

export default Button
