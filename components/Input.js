import classnames from 'classnames'

const Input = ({placeholder, type, onChange, className}) => {
    
    const classes = classnames (
        'p-3 rounded-lg focus:outline-none text-gray-800',
        className
      );


    return (
     
     <input onChange={onChange} className={classes} placeholder={placeholder} type={type}></input>
        )
}

export default Input
