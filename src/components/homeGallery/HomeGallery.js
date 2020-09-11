import React, { useState, useEffect } from "react";
//images
import GalleryProfile from '../../images/home/gallery/gallery-profile.jpg'
import GalleryArhitecture from '../../images/home/gallery/gallery-arhitecture.jpg'
import GalleryFood from '../../images/home/gallery/gallery-food.jpg'
import GalleryPortrait from '../../images/home/gallery/gallery-portrait.jpg'
import GalleryUnderwater from '../../images/home/gallery/gallery-underwater.jpg'
import GalleryLandscape from '../../images/home/gallery/gallery-landscape.jpg'
import GalleryInterior from '../../images/home/gallery/gallery-interior.jpg'
//Components
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);
//Imports
const GalleryImgs = [
    { id: "1", src: GalleryProfile, alt: "side-profile" },
    { id: "2", src: GalleryArhitecture, alt: "arhitecture" },
    { id: "3", src: GalleryFood, alt: "food" },
    { id: "4", src: GalleryPortrait, alt: "portrait" },
    { id: "5", src: GalleryUnderwater, alt: "underwater" },
    { id: "6", src: GalleryLandscape, alt: "landscape" },
    { id: "7", src: GalleryInterior, alt: "interior" },

];

const HomeGallery = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 800;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);



    return (
        <div className="main">
            <div className="main-container home-portfolio">
                <div className="home-content2">
                    <div className="galleryTitle-container">
                       
                        <div className="secondaryTitle home2">Portfolio</div>
                    </div>

                    {width < breakpoint ?
                        <Swiper pagination={{ clickable: true }} centeredSlides={true} spaceBetween={15} slidesPerView={3} >
                            {GalleryImgs.map((item) => {
                                return <SwiperSlide>
                                    <img src={item.src} alt={item.alt} />
                                </SwiperSlide>;
                            })}
                        </Swiper>

                        :

                        GalleryImgs.map((item) => {
                            return (
                                <div key={item.id} className={`gallery image${item.id}`}>
                                    <img className="object-fit-cover" src={item.src} alt={item.alt} />
                                </div>
                            )
                        })}


                    <div className="galleryBtn-container">
                        <Link to="/portfolio" className="button dark">See All</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomeGallery




