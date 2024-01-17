import Carousel, { CarouselProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CardCarousel({children, responsive, ...rest}: CarouselProps) {
    return (
        <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            arrows={false}
            centerMode
            transitionDuration={500}
            className="my-carousel"
            itemClass='my-carousel-item'
            {...rest}
        >
         {children}
        </Carousel>
    )
}
