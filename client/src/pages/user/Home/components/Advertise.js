import React from 'react';
import Slider from 'react-slick';
import slider1 from '~/assets/images/slider1.jpg';
import sub1 from '~/assets/images/sub-slider1.jpg';
import './style.scss'
const Advertise = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
    };
    return (
        <div className="row">
            <div className="col c-9">
                <Slider {...settings}>
                    <div>
                        <img src={slider1} width="100%" alt="" />
                    </div>
                </Slider>
            </div>
            <div className="col c-3">
                <div className="img_qc">
                    <img src={sub1} alt="" />
                </div>
                <div className="img_qc">
                    <img src={sub1} alt="" />
                </div>
                <div className="img_qc">
                    <img src={sub1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Advertise;
