import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const SliderPost = ( {children} ) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <>
        <Carousel centerMode={true}  responsive={responsive}>
        {children}
      </Carousel>;
      </>
    )
}

export default SliderPost
