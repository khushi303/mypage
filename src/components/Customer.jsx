import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cameraman from '../assets/images/cameraman.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Staricon } from './Icon';
import { Prebtn } from './Icon';
import { Nexbtn } from './Icon';

function Customer() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        arrows: false,
    };
    return (
        <div className='lightbrown'>
            <Container id='blog'>
                <Row className='align-items-center justify-content-center py-5'>
                    <Col lg={6} className='d-flex align-items-center justify-content-center'>
                        <img src={cameraman} alt="cameraman"
                            className="w-100 mw-400 mh-563 h-100 object_fit_cover" />
                    </Col>
                    <Col lg={6} className='mt-lg-0 mt-4'>
                        <div className="yellow-line">
                            <h2 className="text-capitalize ff-inter fs-xl fw-600 lightblack lh-66 pb-26 mb-0">A customer
                                said
                                about us:
                            </h2>
                            <Slider {...settings}>
                                <div className="wh_card1">
                                    <p className="ff-inter fs-2sm fw-400 bluebright mb-0 pb-26 mw-467">Salty helped me a
                                        lot in
                                        finding
                                        the best place
                                        for our first outdoor adventure
                                        trip. They responded very quickly and
                                        gave me a detailed account of the place—its history, as well as its best
                                        features.</p>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="">
                                                <Staricon />
                                            </div>
                                            <p className="ff-inter fw-500 fs-4sm lightblack mb-0 pt-2 lh-1">Andrew Sarma
                                            </p>
                                            <p className="ff-inter fs-2xsm fw-400 bluebright mb-0 lh-1 pt-1">
                                                Enterpreneur
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wh_card1">
                                    <p className="ff-inter fs-2sm fw-400 bluebright mb-0 pb-26 mw-467">Salty helped me a
                                        lot in
                                        finding
                                        the best place
                                        for our first outdoor adventure
                                        trip. They responded very quickly and
                                        gave me a detailed account of the place—its history, as well as its best
                                        features.</p>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="">
                                                <Staricon />
                                            </div>
                                            <p className="ff-inter fw-500 fs-4sm lightblack mb-0 pt-2 lh-1">Andrew Sarma
                                            </p>
                                            <p className="ff-inter fs-2xsm fw-400 bluebright mb-0 lh-1 pt-1">
                                                Enterpreneur
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="wh_card1">
                                    <p className="ff-inter fs-2sm fw-400 bluebright mb-0 pb-26 mw-467">Salty helped me a
                                        lot in
                                        finding
                                        the best place
                                        for our first outdoor adventure
                                        trip. They responded very quickly and
                                        gave me a detailed account of the place—its history, as well as its best
                                        features.</p>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className="">
                                                <Staricon />
                                            </div>
                                            <p className="ff-inter fw-500 fs-4sm lightblack mb-0 pt-2 lh-1">Andrew Sarma
                                            </p>
                                            <p className="ff-inter fs-2xsm fw-400 bluebright mb-0 lh-1 pt-1">
                                                Enterpreneur
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="d-flex align-items-center gap-3 pos_absolute">
                                <button className="circle_arrows d-flex align-items-center justify-content-center m-2">
                                    <Prebtn />
                                </button>
                                <button className="m-2 circle_arrows d-flex align-items-center justify-content-center">
                                    <Nexbtn />
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Customer