import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Partenaire1 from '../../img/Partenaire1.png'
import Partenaire2 from '../../img/Partenaire2.png'
import Partenaire3 from '../../img/Partenaire3.png'
import Partenaire4 from '../../img/Partenaire4.png'
import Partenaire5 from '../../img/Partenaire5.png'
import Partenaire6 from '../../img/Partenaire6.png'
import SeactionHead from '../SectionHead/SeactionHead';


SwiperCore.use([Navigation, Pagination, Autoplay]);

const Partner = () => {
    return (
        <>
            <div className="container">
                <SeactionHead title="Nos Partenaire" />
                <div className="row">
                    <div className="col-md-12">
                        <Swiper spaceBetween={30} slidesPerView={1} navigation={{ nextEl: null, prevEl: null, }} autoplay={{ delay: 2500, }}
                            loop speed={2000} >
                            <SwiperSlide>
                                <div className="row my-4">
                                    <div className="col-md-2">
                                        <img src={Partenaire1} alt="Partenaire1" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire2} alt="Partenaire2" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire3} alt="Partenaire3" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire4} alt="Partenaire4" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire5} alt="Partenaire5" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire6} alt="Partenaire6" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row my-4">
                                    <div className="col-md-2">
                                        <img src={Partenaire1} alt="Partenaire1" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire2} alt="Partenaire2" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire3} alt="Partenaire3" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire4} alt="Partenaire4" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire5} alt="Partenaire5" />
                                    </div>
                                    <div className="col-md-2">
                                        <img src={Partenaire6} alt="Partenaire6" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper >
                    </div>
                </div>

            </div >
        </>
    );
};

export default Partner;
