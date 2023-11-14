'use client'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import { Swiper, SwiperSlide, } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function TempleateSlide() {
    return (
        <div>

            <Swiper
                spaceBetween={30}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper-root"

            >
                <SwiperSlide>
                    <Image
                        src={'/img/banner_img/banner.png'}
                        alt="banner"
                        width={1090}
                        height={120}
                        className="w-full"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={'/img/banner_img/banner_2.png'}
                        alt="banner"
                        width={990}
                        height={120}
                        className="w-full"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={'/img/banner_img/banner_4.png'}
                        alt="banner"
                        width={990}
                        height={120}
                        className="w-full"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        src={'/img/banner_img/banner_5.png'}
                        alt="banner"
                        width={990}
                        height={120}
                        className="w-full"
                    />
                </SwiperSlide>
            </Swiper>
        </div >
    )
}