import classNames from 'classNames'
import H1Bordered from '../components/H1Bordered'

const H1 = ({ title, className, ...props }) => {
  const classes = classNames(
    'text-3xl font-bold mt-5',
    className
  );

  const isBordered = props.isBordered;
  if (isBordered) {
    return <H1Bordered className={classes} title={title} />;
  }
  return  <h1 className={classes}>{title}</h1>;



}

export default H1
