import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Footlogo } from './Icon';
import { Facebicon } from './Icon';
import { Instaicon } from './Icon';
import { Tweeticon } from './Icon';

function Footer() {
    return (
        <div className='lightbrown'>
            <Container>
                <Row className='pt-80 pb-80'>
                    <Col lg={4}>
                        <a href="" className="d-flex align-items-center text-decoration-none">
                            <Footlogo />
                            <p className="mb-0 ff-sen fs-4sm fw-700 lightblack">Salty</p>
                        </a>
                        <p className="mb-0 ff-inter fw-400 fs-sm bluebright mw-140 pt-20">Enjoy the touring with Salty</p>
                        <div className="d-flex gap-2 pt-4">
                            <div className="icon-circle d-flex align-items-center justify-content-center mr-2">
                                <a href="https://www.facebook.com/" target="_blank"
                                    className="d-flex align-items-center justify-content-center">
                                    <Facebicon />
                                </a >
                            </div>
                            <div className="icon-circle d-flex align-items-center justify-content-center mr-2 ml-2">
                                <a href="https://www.instagram.com/accounts/login/" target="_blank"
                                    className="d-flex align-items-center justify-content-center">
                                    <Instaicon />
                                </a>
                            </div>
                            <div className="icon-circle d-flex align-items-center justify-content-center ml-2">
                                <a href="https://twitter.com/login" target="_blank"
                                    className="d-flex align-items-center justify-content-center">
                                    <Tweeticon />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row className='pt-lg-0 pt-5'>
                            <Col>
                                <ul className="list-unstyled">
                                    <li className="ff-inter fs-2sm fw-500 lightblack">Resources
                                    </li>
                                    <li className="pt-2"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Download</a>
                                    </li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Help
                                        Center</a></li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Guide
                                        Book</a></li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">App
                                        Directory</a></li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li className="ff-inter fs-2sm fw-500 lightblack">Travellers
                                    </li>
                                    <li className="pt-2"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Why
                                        Travellers</a>
                                    </li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Enterprice</a>
                                    </li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Customer
                                        Stories</a></li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Instagram
                                        post</a></li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li className="ff-inter fs-2sm fw-500 lightblack">Company
                                    </li>
                                    <li className="pt-2"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Travelling</a>
                                    </li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">About
                                        Locato</a></li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Success</a>
                                    </li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Information</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col>
                                <ul className="list-unstyled">
                                    <li className="ff-inter fs-2sm fw-500 lightblack">Get App
                                    </li>
                                    <li className="pt-2"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">App
                                        Store</a>
                                    </li>
                                    <li className="pt-1"><a href=""
                                        className="ff-inter footer_link fs-xsm fw-400 blackbr">Google
                                        Play
                                        Store</a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer