import React from 'react';
import { Container } from 'react-bootstrap';
import spiralray from '../assets/images/spiral rays.png';
import { Esharebtn } from './Icon';

function Newsletter() {
    return (
        <div className='lightbrown py-5'>
            <Container>
                <div className='fade-yellow br-30 position-relative p-2'>
                    <div className="position-relative zindex_2">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h2 className="ff-inter fw-600 fs-xlg text-center lightblack pt-75">Sign up to our newsletter</h2>
                            <p className="ff-inter fs-sm fw-400 text-center bluebright mw-415 mb-0 pb-5">Recieve latest news, update,
                                and
                                many
                                other
                                things every week.
                            </p>
                            <div className="email_box mb-75 w-100 d-flex">
                                <input type="email" className="w-100 mw-400 h-100 fs-xsm fw-400 ff-inter bluebright pl-10"
                                    placeholder="Enter Your email address" />
                                <div className="send_box d-flex align-items-center justify-content-center">
                                    <Esharebtn />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='position-absolute spiral-img'>
                        <img src={spiralray} alt="spiralray" className='w-100 h-100' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Newsletter