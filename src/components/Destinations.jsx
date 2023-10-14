import React from 'react';
import cardimg1 from '../assets/images/card-img-1.png';
import cardimg2 from '../assets/images/card-img-2.png';
import cardimg3 from '../assets/images/card-img-3.png';
import cardimg4 from '../assets/images/card-img-4.png';
import cardimg5 from '../assets/images/card-img-5.png';
import cardimg6 from '../assets/images/card-img-6.png';
import { Container } from 'react-bootstrap';


function Destinations() {
    return (
        <div className='lightbrown'>
            <Container className='py-5' id='tour'>
                <h2 className="ff-inter mb-0 fs-xl fw-600 lightblack lh-66 pb-3 text-center">Top Destinations</h2>
                <p className="ff-inter mb-0 fs-sm fw-400 bluebright lh-1 pb-26 text-center">Sost Brilliant reasons Entrada
                    should be
                    your
                    one-stop-shop!</p>
                <ul className="nav nav-pills mb-3 align-items-center justify-content-center" id="pills-tab"
                    role="tablist">
                    <li className="nav-item p-2" role="presentation">
                        <button
                            className="btn_1 w-92px d-flex align-items-center justify-content-center fs-xsm fw-400 lightblack active"
                            id="pills-london-tab" data-bs-toggle="pill" data-bs-target="#pills-london" type="button"
                            role="tab" aria-controls="pills-london" aria-selected="true">London</button>
                    </li>
                    <li className="nav-item p-2" role="presentation">
                        <button
                            className="btn_1 w-100px d-flex align-items-center justify-content-center fs-xsm fw-400 lightblack"
                            id="pills-bangkok-tab" data-bs-toggle="pill" data-bs-target="#pills-bangkook" type="button"
                            role="tab" aria-controls="pills-bangkook" aria-selected="false">Bangkok</button>
                    </li>
                    <li className="nav-item p-2" role="presentation">
                        <button
                            className="btn_1 w-97px d-flex align-items-center justify-content-center fs-xsm fw-400 lightblack"
                            id="pills-england-tab" data-bs-toggle="pill" data-bs-target="#pills-england" type="button"
                            role="tab" aria-controls="pills-england" aria-selected="false">England</button>
                    </li>
                    <li className="nav-item p-2" role="presentation">
                        <button
                            className="btn_1 mw-112px d-flex align-items-center justify-content-center fs-xsm fw-400 lightblack"
                            id="pills-singapore-tab" data-bs-toggle="pill" data-bs-target="#pills-singapore" type="button"
                            role="tab" aria-controls="pills-singapore" aria-selected="false">Singapore</button>
                    </li>
                    <li className="nav-item p-2" role="presentation">
                        <button
                            className="btn_1 mw-112px d-flex align-items-center justify-content-center fs-xsm fw-400 lightblack"
                            id="pills-italy-tab" data-bs-toggle="pill" data-bs-target="#pills-italy" type="button"
                            role="tab" aria-controls="pills-italy" aria-selected="false">Italy</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-london" role="tabpanel"
                        aria-labelledby="pills-london-tab" tabIndex="0">
                        <div className="flex-grid">
                            <div className="grid-items item_1">
                                <img src={cardimg1} alt="grid-img-1"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-2 lh-1">Vientam</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_2">
                                <img src={cardimg2} alt="grid-img-2"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-2 lh-1">Vientam</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_3">
                                <img src={cardimg3} alt="grid-img-3"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute1">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-2 lh-1">Vientam</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_4">
                                <img src={cardimg4} alt="grid-img-4"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-2 lh-1">Vientam</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_5">
                                <img src={cardimg5} alt="grid-img-5"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-2 lh-1">Vientam</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_6">
                                <img src={cardimg6} alt="grid-img-6"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-2 lh-1">Vientam</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-bangkook" role="tabpanel" tabIndex="0">
                        <div className="flex-grid">
                            <div className="grid-items item_1">
                                <img src={cardimg1} alt="grid-img-1"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Bangkok</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_2">
                                <img src={cardimg2} alt="grid-img-2"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Bangkok</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_3">
                                <img src={cardimg3} alt="grid-img-3"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute1">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Bangkok</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_4">
                                <img src={cardimg4} alt="grid-img-4"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Bangkok</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_5">
                                <img src={cardimg5} alt="grid-img-5"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Bangkok</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_6">
                                <img src={cardimg6} alt="grid-img-6"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Bangkok</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-england" role="tabpanel" aria-labelledby="pills-england-tab"
                        tabIndex="0">
                        <div className="flex-grid">
                            <div className="grid-items item_1">
                                <img src={cardimg1} alt="grid-img-1"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">England</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_2">
                                <img src={cardimg2} alt="grid-img-2"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">England</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_3">
                                <img src={cardimg3} alt="grid-img-3"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute1">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">England</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_4">
                                <img src={cardimg4} alt="grid-img-4"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">England</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_5">
                                <img src={cardimg5} alt="grid-img-5"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">England</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_6">
                                <img src={cardimg6} alt="grid-img-6"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">England</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-singapore" role="tabpanel" aria-labelledby="pills-singapore-tab"
                        tabIndex="0">
                        <div className="flex-grid">
                            <div className="grid-items item_1">
                                <img src={cardimg1} alt="grid-img-1"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Singapore</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_2">
                                <img src={cardimg2} alt="grid-img-2"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Singapore</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_3">
                                <img src={cardimg3} alt="grid-img-3"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute1">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Singapore</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_4">
                                <img src={cardimg4} alt="grid-img-4"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Singapore</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_5">
                                <img src={cardimg5} alt="grid-img-5"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Singapore</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_6">
                                <img src={cardimg6} alt="grid-img-6"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Singapore</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-italy" role="tabpanel" aria-labelledby="pills-italy-tab"
                        tabIndex="0">
                        <div className="flex-grid">
                            <div className="grid-items item_1">
                                <img src={cardimg1} alt="grid-img-1"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Italy</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_2">
                                <img src={cardimg2} alt="grid-img-2"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Italy</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_3">
                                <img src={cardimg3} alt="grid-img-3"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute1">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Italy</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_4">
                                <img src={cardimg4} alt="grid-img-4"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Italy</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_5">
                                <img src={cardimg5} alt="grid-img-5"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Italy</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                            <div className="grid-items item_6">
                                <img src={cardimg6} alt="grid-img-6"
                                    className="w-100 h-100 position-relative" />
                                <button
                                    className="btn-3 d-flex align-items-center justify-content-center fs-xsm fw-600 ff-inter p-absolute">3.5</button>
                                <div className="pos-absolute1">
                                    <p className="mb-0 ff-inter fs-4sm fw-600 white pb-3 lh-1">Italy</p>
                                    <p className="fs-xsm fw-400 white ff-inter lh-1">Worefall</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Destinations