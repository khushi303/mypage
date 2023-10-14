import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from 'react-bootstrap';
import s2img2 from '../assets/images/s2img2.png';
import s2img3 from '../assets/images/s2img3.png';
import s2img4 from '../assets/images/s2img4.png';
import s2img5 from '../assets/images/s2img5.png';
import { Prebtn } from './Icon';
import { Nexbtn } from './Icon';

function Popular() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div>
            <section className='lightbrown py-5' id='destination'>
                <Container>
                    <Row className='py-4 justify-content-center align-items-center'>
                        <Col className=''>
                            <h2 className="mb-0 mw-400 ff-inter fw-600 fs-xl lightblack lh-66">Find Popular Destination</h2>
                        </Col>
                        <Col className='d-flex gap-3 justify-content-center align-items-center justify-content-md-end py-4 p-md-0'>
                            <button className="prev1 circle_arrows d-flex align-items-center justify-content-center mr-3">
                                <Prebtn />
                            </button>
                            <button className="next1 circle_arrows d-flex align-items-center justify-content-center">
                                <Nexbtn />
                            </button>
                        </Col>
                    </Row>
                    <Container>
                        <Slider {...settings}>
                            <div className='px-2'>
                                <div className="wh_card h-100">
                                    <img src={s2img2} alt="slid2-1"
                                        className="w-100 br-16 mh-252 object-fit-cover" />
                                    <div>
                                        <p className="ff-inter fs-2md fw-600 lightblack mb-0 pt-24 lh-1 h-100">Mountain Hiking Tour</p>
                                        <p className="ff-inter fs-xsm fw-400 bluebright mb-0 pt-3 lh-1">Mountain Hiking Tour</p>
                                        <div className="d-flex justify-content-between align-items-center pt-4">
                                            <p className="mb-0 ff-inter fs-2md fw-600 lightblack lh-1">$89 <span
                                                className="ff-inter fw-400 fs-sm bluebright">/Person</span></p>
                                            <button className="btn-bn fs-xsm fw-400">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="wh_card h-100">
                                    <img src={s2img3} alt="slid2-2"
                                        className="w-100 br-16 mh-252 object-fit-cover" />
                                    <div>
                                        <p className="ff-inter fs-2md fw-600 lightblack mb-0 pt-24 lh-1 h-100">Machu Picchu, Peru</p>
                                        <p className="ff-inter fs-xsm fw-400 bluebright mb-0 pt-3 lh-1">Machu Picchu, Peru</p>
                                        <div className="d-flex justify-content-between align-items-center pt-4">
                                            <p className="mb-0 ff-inter fs-2md fw-600 lightblack lh-1">$99 <span
                                                className="ff-inter fw-400 fs-sm bluebright">/Person</span></p>
                                            <button className="btn-bn fs-xsm fw-400">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="wh_card h-100">
                                    <img src={s2img4} alt="slid2-3"
                                        className="w-100 br-16 mh-252 object-fit-cover" />
                                    <div>
                                        <p className="ff-inter fs-2md fw-600 lightblack mb-0 pt-24 lh-1 h-100">Machu Picchu, Peru
                                        </p>
                                        <p className="ff-inter fs-xsm fw-400 bluebright mb-0 pt-3 lh-1">Mountain Hiking Tour</p>
                                        <div className="d-flex justify-content-between align-items-center pt-4">
                                            <p className="mb-0 ff-inter fs-2md fw-600 lightblack lh-1">$70 <span
                                                className="ff-inter fw-400 fs-sm bluebright">/Person</span></p>
                                            <button className="btn-bn fs-xsm fw-400">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="wh_card h-100">
                                    <img src={s2img5} alt="slid2-3"
                                        className="w-100 br-16 mh-252 object-fit-cover" />
                                    <div>
                                        <p className="ff-inter fs-2md fw-600 lightblack mb-0 pt-24 lh-1 h-100">Mountain Hiking Tour</p>
                                        <p className="ff-inter fs-xsm fw-400 bluebright mb-0 pt-3 lh-1">Mountain Hiking Tour</p>
                                        <div className="d-flex justify-content-between align-items-center pt-4">
                                            <p className="mb-0 ff-inter fs-2md fw-600 lightblack lh-1">$89 <span
                                                className="ff-inter fw-400 fs-sm bluebright">/Person</span></p>
                                            <button className="btn-bn fs-xsm fw-400">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="wh_card h-100">
                                    <img src={s2img3} alt="slid2-3"
                                        className="w-100 br-16 mh-252 object-fit-cover" />
                                    <div>
                                        <p className="ff-inter fs-2md fw-600 lightblack mb-0 pt-24 lh-1 h-100">Mountain Hiking Tour</p>
                                        <p className="ff-inter fs-xsm fw-400 bluebright mb-0 pt-3 lh-1">Mountain Hiking Tour</p>
                                        <div className="d-flex justify-content-between align-items-center pt-4">
                                            <p className="mb-0 ff-inter fs-2md fw-600 lightblack lh-1">$89 <span
                                                className="ff-inter fw-400 fs-sm bluebright">/Person</span></p>
                                            <button className="btn-bn fs-xsm fw-400">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="wh_card h-100">
                                    <img src={s2img4} alt="slid2-3"
                                        className="w-100 br-16 mh-252 object-fit-cover" />
                                    <div>
                                        <p className="ff-inter fs-2md fw-600 lightblack mb-0 pt-24 lh-1 h-100">Mountain Hiking Tour</p>
                                        <p className="ff-inter fs-xsm fw-400 bluebright mb-0 pt-3 lh-1">Mountain Hiking Tour</p>
                                        <div className="d-flex justify-content-between align-items-center pt-4">
                                            <p className="mb-0 ff-inter fs-2md fw-600 lightblack lh-1">$89 <span
                                                className="ff-inter fw-400 fs-sm bluebright">/Person</span></p>
                                            <button className="btn-bn fs-xsm fw-400">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </Container>
                </Container>
            </section>
        </div>
    )
}

export default Popular