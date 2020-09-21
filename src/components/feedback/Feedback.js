import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination , Navigation } from "swiper";
import { FeedBackItems } from "./FeedBackItems"
SwiperCore.use([Navigation, Pagination]);
const Feedback = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="home-content3">
          <div className="title-container">
            <h1 className="secondaryTitle home3">Feedback</h1>
          </div>

          <div className="feedback-carousel">
            <Swiper pagination={{ clickable: true }} navigation slidesPerView={1} spaceBetween={15}>
              {FeedBackItems.map((item) => {
                return <SwiperSlide key={item.id}>
                  <div className="feedback image">
                    <img className="object-fit-cover" src={item.src} alt={item.alt} />
                  </div>
                  <div className="feedback text">
                    <p>{item.text}</p>
                    <div className="feedback-name">
                      <div className="line"></div>
                    <p>{item.name}</p>
                    </div>
                    
                  </div>
                  

                </SwiperSlide>;
              })}
            </Swiper>

          </div>
        </div>
      </div>



    </div>

  );
};

export default Feedback;
