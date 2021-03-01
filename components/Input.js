import classNames from 'classNames'

const Input = ({placeholder, type, className}) => {
    
    const classes = classNames (
        'p-3 rounded-lg',
        className
      );


    return (
     
     <input className={classes} placeholder={placeholder} type={type}></input>
        )
}

export default Input
