"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function InfinitySlider({ partners }: { partners: string[] }) {
    // Duplicate to fix loop warning & make perfect infinite scroll
    const items = [...partners, ...partners];
    
    return (
        <div className="w-full overflow-hidden" id="sliderss">
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={120}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
            >
                {items.map((src, i) => (
                    <SwiperSlide
                        key={i}
                        className="w-fit! flex items-center justify-center"
                    >
                        <img
                            src={src}
                            className="h-12 object-contain opacity-80 hover:opacity-100 transition"
                            alt=""
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
