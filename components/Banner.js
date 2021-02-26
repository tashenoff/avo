
const Banner = ({ title_banner, text_banner, children, className }) => {
 
    return (
        <div className={className}>
            <div className="py-6 container mx-auto w-full">
                <h1 className="text-3xl font-bold">{title_banner}</h1>
                <p>{text_banner}</p>
                {children}
            </div>
        </div>
        
    )
}

export default Banner
