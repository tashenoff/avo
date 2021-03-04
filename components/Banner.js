const Banner = ({ title_banner, text_banner, children, className }) => {

    return (
        <div className={className}>
            <div className="py-6 container mx-auto w-full">
            
                {children}
            </div>
        </div>

    )
}

export default Banner
