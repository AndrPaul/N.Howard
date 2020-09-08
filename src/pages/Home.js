import React from "react";
import Header from "../components/header/Header";
import Photographer1 from "../images/home/photographer1.jpg";
import PalmTree from '../images/home/palmtree.jpg';
import Portrait1 from '../images/home/portrait1.jpg'
import {Link} from 'react-router-dom';
const Home = (props) => {
    return (
        <div>
            <Header
                class={props.class}
                title={props.title}
                subtitle={props.subtitle}
            />
            <div className="main">
                <div className="main-container">

                    <div className="main-content1">
                        <div className="main-image1">
                            <img className="object-fit-cover" src={Photographer1} alt="" />
                        </div>
                        <h1 className="main-title1">About me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et pariatur tenetur cumque expedita vel sit minima nostrum temporibus quae deleniti?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel doloremque quos praesentium est suscipit molestias.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sapiente dignissimos aperiam....</p>
                        <Link className="secondary-link" to="/about">More</Link>
                    </div>
                    <div className="two-images-container">
                        <div className="main-image2">
                            <img className="object-fit-cover" src={Portrait1} alt="" />
                        </div>
                        <div className="main-image3">
                            <img className="object-fit-cover" src={PalmTree} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
