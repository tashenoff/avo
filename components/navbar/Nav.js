import classnames from 'classnames'
const Nav = ({className, variant, children}) => {

    const classes = classnames (
        'p-2 z-10 top-0 w-full',
        className,
        variant
      );

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Nav
