import './SliderImage.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";

const data = [
    {
        img: require('../media/gleb.png'),
        style: {
            objectPosition: '0px 0px'
        },
        name: 'Глеб',
        description: 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым '
    },
    {
        img: require('../media/yana.png'),
        name: 'Яна',
        description: 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым '
    },
    {
        img: require('../media/oleg.png'),
        style: {
            objectPosition: '0px -20px'
        },
        name: 'Олег',
        description: 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым '
    },
    {
        img: require('../media/igor.png'),
        style: {
            objectPosition: '0px 0px'
        },
        name: 'Игорь',
        description: 'В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым '
    },
    {
        img: require('../media/olena.png'),
        style: {
            objectPosition: '0px -10px',
        },
        name: 'Олена',
        description: 'В большинстве случаев именно такой вид доставки В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставкиоказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым выгодным для клиента. В большинстве случаев именно такой вид доставки оказывается самым '
    }
]

const arrow = <svg viewBox="0 0 26 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.62147 53C1.21013 53 0.789174 52.8222 0.473504 52.4769C-0.157835 51.7864 -0.157835 50.6563 0.473504 49.9658L22.0828 26.3196L0.789174 3.0291C0.157835 2.3385 0.157835 1.20845 0.789174 0.517908C1.42051 -0.172636 2.45363 -0.172636 3.08497 0.517908L25.5265 25.0639C26.1578 25.7545 26.1578 26.8845 25.5265 27.575L2.7693 52.4768C2.45363 52.8221 2.03277 52.9999 1.62142 52.9999L1.62147 53Z" fill="white"/></svg>

const responsive = [
    {
        breakpoint: 1050,
        settings: {
            dots: true,
            arrows: false,
        },
    }
]
const SliderImage = () => {

    const settings = {
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: true,
        onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    };

    const [nav1, setNav1] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slider1, setSlider1] = useState(null);

    useEffect(() => {
        setNav1(slider1);
    }, [slider1]);

    const selectReviewImage = (id) => () => {
        slider1.slickGoTo(id)
    }

    return (
        <div className='sliderContainer'>
            <div className='title'>Відгуки</div>
            <div className='slider'>
                <div className='imageFastChoiceContainer'>
                    <div>
                        {data.map((review, index) => (
                            <div
                                key={`${review.name}_img`}
                                className={currentSlide === index ? 'activeImage' : ''}
                                onClick={selectReviewImage(index)}
                            >
                                <img src={review.img} style={review?.style} alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='reviewContainer'>
                    <Slider
                        {...settings}
                        responsive={responsive}
                        prevArrow={arrow}
                        nextArrow={arrow}
                        asNavFor={nav1}
                        ref={(slider) => setSlider1(slider)}
                        initialSlide={2}
                    >
                        {data.map((review) => (
                            <div
                                className='reviewItem'
                                key={review.name}
                            >
                                <div className='imageCentredContainer'>
                                    <img src={review.img} style={review?.style} alt=""/>
                                </div>
                                <span>{review.description}</span>
                                <span>{review.name}</span>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export {SliderImage}