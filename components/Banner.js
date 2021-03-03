import H1 from "./H1"

const Banner = ({ title_banner, text_banner, children, className }) => {

    return (
        <div className={className}>
            <div className="py-6 container mx-auto w-full">
                {/* <H1 title={title_banner} />
                <p>{text_banner}</p> */}
                {children}
            </div>
        </div>

    )
}

export default Banner
