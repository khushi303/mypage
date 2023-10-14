import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import headimg from '../assets/images/header-img.png';
import { Logo } from "./Icon";
import { Btnshare } from './Icon';
import { Locsg } from './Icon';
import { Calen } from './Icon';
import { Searchicon } from './Icon';

function Header() {
    function myfun() {
        document.getElementById("nicon").classList.toggle("left-0");
        document.body.classList.toggle("overflow_hidden")
        document.getElementById("menu-icon").classList.toggle("cross");
    }
    return (
        <div className='lightbrown'>
            <Container className='lightbrown'>
                <div className="d-flex justify-content-between align-items-center p-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <a href="#pagelogo" className="d-flex align-items-center text-decoration-none">
                            <Logo />
                            <p className="mb-0 ff-sen fs-4sm fw-700 lightblack">Salty</p>
                        </a>
                        <ul id='nicon'
                            className="mb-0 d-flex align-items-center justify-content-center gap-36 pl-lg-72 pl-0 mobile-view flex-column flex-lg-row">
                            <li className=""><a href="#home" onClick={myfun}
                                className="ff-poppins fs-sm fw-400 darkblue nav-line">Home</a>
                            </li>
                            <li className=""><a href="#about" onClick={myfun}
                                className="ff-poppins fs-sm fw-400 darkblue nav-line">About
                                us</a></li>
                            <li className=""><a href="#destination" onClick={myfun}
                                className="ff-poppins fs-sm fw-400 darkblue nav-line">Destinations</a>
                            </li>
                            <li className=""><a href="#tour" onClick={myfun}
                                className="ff-poppins fs-sm fw-400 darkblue nav-line">Tours</a>
                            </li>
                            <li className=""><a href="#blog" onClick={myfun}
                                className="ff-poppins fs-sm fw-400 darkblue nav-line">Blog</a>
                            </li>
                            <li>
                                <div className="btn-book d-flex align-items-center justify-content-center cur-pointer d-lg-none"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <p className="mb-0 ff-poppins fs-sm fw-500 orange">Book Now</p>
                                    <span className="pl-6 pb-6px">
                                        <Btnshare />
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div onClick={myfun} id="menu-icon" className="menu_box">
                        <div className="line crl-1"></div>
                        <div className="line crl-2"></div>
                        <div className="line crl-3"></div>
                    </div>
                    <div className="btn-book d-lg-flex align-items-center justify-content-center cur-pointer d-none">
                        <p className="mb-0 ff-poppins fs-sm fw-500 orange">Book Now</p>
                        <span className="pl-6 pb-6px">
                            <Btnshare />
                        </span>
                    </div>
                </div>
            </Container>
            <Container className='' id='home'>
                <Row className='py-4'>
                    <Col lg={7}>
                        <h2 className="ff-sen fw-700 fs-2xl lightblack lh-86 ls-0 pb-26">Discover the Best Lovely Places</h2>
                        <p className="mb-0 ff-inter fs-2sm fw-400 bluebright mw-500 ml-4px">Plan and book your perfect trip
                            with
                            expert
                            advice, travel
                            tips,
                            destination
                            information and
                            inspiration from us.</p>
                        <Row className='big_btn mw-500 justify-content-center align-items-center mt-4 mx-3px mx-lg-0'>
                            <Col md={5} className='col-6 mb-3 mb-sm-0 p-0 d-flex align-items-center justify-content-center col_line position-relative'>
                                <div>
                                    <p className="mb-0 fs-2sm fw-500 lightblack lh-1">Where</p>
                                    <div className="pt-1 d-flex align-items-baseline">
                                        <p className="mb-0 fs-2xsm fw-400 blackdk lh-1 pr-10 pr-sm-26">Center Point, Lo...</p>
                                        <Locsg />
                                    </div>
                                </div>
                            </Col>
                            <Col md={5} className='col-6 mb-3 mb-sm-0 d-flex align-items-center justify-content-center'>
                                <div>
                                    <p className="mb-0 fs-2sm fw-500 lightblack lh-1">Date</p>
                                    <div className="pt-1 d-flex align-items-baseline">
                                        <p className="mb-0 fs-2xsm fw-400 blackdk lh-1 pr-10 pr-sm-26">09th March,2021</p>
                                        <Calen />
                                    </div>
                                </div>
                            </Col>
                            <Col md={2} className='pt-3 pt-lg-0 d-flex align-items-center justify-content-center'>
                                <div className="search_icon">
                                    <Searchicon />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={5} className='mt-lg-0 mt-5'>
                        <img src={headimg} alt="header-img" className='w-100' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header