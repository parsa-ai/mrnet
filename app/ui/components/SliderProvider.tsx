"use client"
import { ReactNode, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function SliderProvider({ items }: { items: ReactNode[] }) {
    const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);
    return (
        <div className="slider-container" >
            <Swiper
                className="mySwiper"
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                pagination={{
                    el: paginationEl, 
                    clickable: true,
                }}
            >
                {items.map((item, index) => {
                    return (
                        <SwiperSlide 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }} 
                            key={index}
                        >
                            {item}
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                marginTop: '20px',
                padding: '0 10px' 
            }}>
                <div className="nav-btn custom-prev" style={{ cursor: 'pointer' }}>
                    <ArrowLeft />
                </div>

                <div 
                    className="custom-pagination" 
                    ref={(node) => setPaginationEl(node)}
                    style={{
                        width: 'auto',
                        position: 'static',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px' 
                    }}
                ></div>

                <div className="nav-btn custom-next" style={{ cursor: 'pointer' }}>
                    <ArrowRight />
                </div>
            </div>
        </div>
    )
}

export default SliderProvider