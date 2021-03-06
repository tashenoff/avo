import classnames from 'classnames'


const H1 = ({ title, className, ...props }) => {
  const classes = classnames(
    'text-3xl font-bold mt-5',
    className
  );

  const isBordered = props.isBordered;
  if (isBordered) {
    return (
      <>
      <h1 className={classes}>{title}</h1>
      <div className="bg-new-green w-5 h-1 my-5"></div>
      </>
    );
  }
  return  <h1 className={classes}>{title}</h1>;



}

export default H1
