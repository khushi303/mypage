import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import simg1 from '../assets/images/simg1.png';
import simg2 from '../assets/images/simg2.png';
import simg3 from '../assets/images/simg3.png';
import simg4 from '../assets/images/simg4.png';
import simg5 from '../assets/images/simg5.png';
import simg6 from '../assets/images/simg6.png';
import { Prebtn } from './Icon';
import { Nexbtn } from './Icon';

function About() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className='lightbrown'>
            <Container id='about' className='pt-4'>
                <Row className='pt-4'>
                    <Col>
                        <h2 className="ff-inter fs-xl fw-600 lightblack">Categories</h2>
                        <p className="ff-inter fs-sm fw-400 bluebright mw-370 mb-0 pb-4">Here are lots of interesting
                            destinations to
                            visit, but
                            don’t be confused—they’re already grouped by
                            category.</p>
                    </Col>
                    <Col className='d-flex gap-3 justify-content-center justify-content-md-end py-4 p-md-0'>
                        <button className="circle_arrows d-flex align-items-center justify-content-center mr-3" >
                            <Prebtn />
                        </button>
                        <button className="circle_arrows d-flex align-items-center justify-content-center" >
                            <Nexbtn />
                        </button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Slider {...settings}>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="position-relative img_overlay">
                            <img src={simg1} alt="img1" className="img_box w-100 mw-170" />
                            <div
                                className="d-flex img-hover align-items-center justify-content-center position-absolute top-0 br-86">
                                <p className="ff-inter fs-4sm fw-600 text-center white mb-0 lh-1">Visite</p>
                            </div>
                        </div>
                        <p className="fs-3md fw-500 ff-inter lightblack text-center pt-18">Beach</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="position-relative img_overlay">
                            <img src={simg2} alt="img2" className="img_box w-100 mw-170" />
                            <div
                                className="d-flex img-hover align-items-center justify-content-center position-absolute top-0 br-86">
                                <p className="ff-inter fs-4sm fw-600 text-center white mb-0 lh-1">Visite</p>
                            </div>
                        </div>
                        <p className="fs-3md fw-500 ff-inter lightblack text-center pt-18">Desert</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="position-relative img_overlay">
                            <img src={simg3} alt="img3" className="img_box w-100 mw-170" />
                            <div
                                className="d-flex img-hover align-items-center justify-content-center position-absolute top-0 br-86">
                                <p className="ff-inter fs-4sm fw-600 text-center white mb-0 lh-1">Visite</p>
                            </div>
                        </div>
                        <p className="fs-3md fw-500 ff-inter lightblack text-center pt-18">Mountain</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="position-relative img_overlay">
                            <img src={simg4} alt="img4" className="img_box w-100 mw-170" />
                            <div
                                className="d-flex img-hover align-items-center justify-content-center position-absolute top-0 br-86">
                                <p className="ff-inter fs-4sm fw-600 text-center white mb-0 lh-1">Visite</p>
                            </div>
                        </div>
                        <p className="fs-3md fw-500 ff-inter lightblack text-center pt-18">Temple</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="position-relative img_overlay">
                            <img src={simg5} alt="img5" className="img_box w-100 mw-170" />
                            <div
                                className="d-flex img-hover align-items-center justify-content-center position-absolute top-0 br-86">
                                <p className="ff-inter fs-4sm fw-600 text-center white mb-0 lh-1">Visite</p>
                            </div>
                        </div>
                        <p className="fs-3md fw-500 ff-inter lightblack text-center pt-18">Tower</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="position-relative img_overlay">
                            <img src={simg6} alt="img6" className="img_box w-100 mw-170" />
                            <div
                                className="d-flex img-hover align-items-center justify-content-center position-absolute top-0 br-86">
                                <p className="ff-inter fs-4sm fw-600 text-center white mb-0 lh-1">Visite</p>
                            </div>
                        </div>
                        <p className="fs-3md fw-500 ff-inter lightblack text-center pt-18">Pyramid</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <div className="position-relative img_overlay">
                            <img src={simg6} alt="img6" className="img_box w-100 mw-170" />
                            <div
                                className="d-flex img-hover align-items-center justify-content-center position-absolute top-0 br-86">
                                <p className="ff-inter fs-4sm fw-600 text-center white mb-0 lh-1">Visite</p>
                            </div>
                        </div>
                        <p className="fs-3md fw-500 ff-inter lightblack text-center pt-18">Pyramid</p>
                    </div>
                </Slider >
            </Container>
        </div >
    );
}

export default About