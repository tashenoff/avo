import classnames from 'classnames'

const H1Bordered = ({ title, className, ...props }) => {

return (
  <>
  <h1 className={className}>{title}</h1>
  <div className="bg-new-green w-5 h-1 my-5"></div>
  </>
)
    


}

export default H1Bordered
