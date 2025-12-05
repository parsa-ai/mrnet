"use client"
import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 1. Simple Icons for the arrows (You can replace these with your own icon library)
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
                // 3. Configure Modules
                modules={[Autoplay, Navigation, Pagination]}
                // 4. Link to custom class names defined below
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                pagination={{
                    el: '.custom-pagination',
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

            {/* 5. Custom Control Layout (Below the slider) */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                marginTop: '20px',
                padding: '0 10px' 
            }}>
                {/* Previous Button */}
                <div className="nav-btn custom-prev">
                    <ArrowLeft />
                </div>

                {/* Pagination Dots Container */}
                <div className="custom-pagination" style={{
                    width: 'auto',
                    position: 'static', /* Overrides default Swiper absolute positioning */
                    display: 'flex',
                    alignItems: 'center'
                }}></div>

                {/* Next Button */}
                <div className="nav-btn custom-next">
                    <ArrowRight />
                </div>
            </div>
        </div>
    )
}

export default SliderProvider