import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Swiper.scss";

interface SwiperSliderI {
    data: {src: string}[];
}

const SwiperSlider = React.memo((props: SwiperSliderI) => {            //memo - avoid unnecessary renders
    const {data} = props;

    return (
        <Swiper
            className="container swiper-slider"
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={'auto'}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
        >
            {data.map((item) => {
                return (
                    <SwiperSlide className="swiper-slider__slide">
                        <div className="swiper-slider__slide-block">
                            <img className="swiper-slider__slide-img" src={item.src}/>
                        </div>
                    </SwiperSlide>)
            })}
        </Swiper>
    )
})
export default SwiperSlider;
