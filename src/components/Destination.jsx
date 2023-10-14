import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import desimg from '../assets/images/desimg1.png';
import { Starlocicon } from './Icon';
import { Locicon } from './Icon';

function Destination() {
    return (
        <div className='lightbrown'>
            <section id='about'>
                <Container>
                    <Row className='py-5 justify-content-between align-items-center'>
                        <Col lg={5}>
                            <img src={desimg} alt="mid-section-man" className="w-100" />
                            <div
                                className="wh_box d-sm-flex d-none align-items-center justify-content-center flex-column absolute_1">
                                <Locicon />
                                <p className="ff-poppins fs-2xlg fw-600 text-center orange mb-0 pt-4 lh-1">600%</p>
                                <p className="ff-inter fs-3sm fw-400 text-center blackb mb-0 pt-2 lh-1">Destinations</p>
                            </div>
                            <div className="d-sm-flex d-none wh_box1 justify-content-center absolute_2">
                                <Starlocicon />
                                <div className="pl-16">
                                    <p className="ff-poppins fs-4md fw-600 mb-0 lh-1 lightblack">5000+</p>
                                    <p className="mb-0 lh-1 pt-2 ff-poppins fs-2xsm fw-400 bluebright">Customars</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} xl={6} className='mt-lg-0 mt-5'>
                            <p className="mb-0 fs-4sm fw-600 ff-inter orange ls-4">Our Experience</p>
                            <h2 className="ff-inter fs-xl fw-600 lightblack  pt-20 mb-0">Our Stories Have Adventures
                            </h2>
                            <p className="mb-0 mw-467 ff-inter fw-400 pt-20 fs-sm bluebright pb-4">We are experienced in
                                bringing
                                adventures to
                                stay
                                their
                                journey, with all
                                outdoor
                                destinations in the world as our
                                specialties. Start your adventure now! Nature has already called you!</p>
                            <Row className='justify-content-center'>
                                <Col md={4} className='col-6'>
                                    <div className="wh_box2 w-100 d-flex flex-column align-items-center justify-content-center">
                                        <p className="fs-lg fw-600 ff-inter orange lh-1 mb-0">12K+</p>
                                        <p className="ff-inter fw-400 fs-md blackdk pt-18 text-center mb-0 mw-84">Succes
                                            Journey
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4} className='col-6'>
                                    <div className="wh_box2 w-100 d-flex flex-column align-items-center justify-content-center">
                                        <p className="fs-lg fw-600 ff-inter orange lh-1 mb-0">16+</p>
                                        <p className="ff-inter fw-400 fs-md blackdk pt-18 text-center mb-0 mw-84">Awards
                                            Winning
                                        </p>
                                    </div>
                                </Col>
                                <Col md={4} className='col-6 mt-md-0 mt-4'>
                                    <div className="wh_box2 w-100 d-flex flex-column align-items-center justify-content-center">
                                        <p className="fs-lg fw-600 ff-inter orange lh-1 mb-0">20+</p>
                                        <p className="ff-inter fw-400 fs-md blackdk pt-18 text-center mb-0">Years Of
                                            Experience
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Destination