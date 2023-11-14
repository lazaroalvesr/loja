'use client'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import { Swiper, SwiperSlide, } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';


interface CarouselProps {
    images: {
        src: string;
        width: number;
        height: number;
    }[];
}

const TempleateSlide: React.FC<CarouselProps> = ({ images }) => {
    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper-root"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={image.src}
                        alt={`banner_${index}`}
                        width={image.width}
                        height={image.height}
                        className="w-full"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TempleateSlide;
