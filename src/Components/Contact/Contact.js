import React from 'react';
// import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router';
import './Contact.css';

const Contact = () => {
    // const { userKey } = useParams();
    // const [origin, setOrigin] = useState('');
    // const [destination, setDestination] = useState('');

    return (
        <>
           <section className="ride-search py-5">
               <Container className="c_custom">
                        <Row>
                            <Col lg={12}>
                                <Row>
                                    <Col lg={4} className="mb-lg-0 mb-5">
                                        <form className="ride-bg form bg-tag-1">
                                            <Row>
                                                <Col md={12}>
                                                    <p className="ride-title mb-5 medi-30"> <strong>Need Consultation?</strong><br/>Contact Us!</p>
                                                </Col>
                                                <Col md={12}>
                                                    <p className="mb-3"><i class="fa fa-hand-o-right" aria-hidden="true"></i><span class="ml-2">Ride Picked: </span></p>
                                                    <label htmlFor="pickup" className="lit-14">Pick-up Point</label>
                                                    <div className="input-field">
                                                        <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit-14" type="text" name="pickup" placeholder="Enter pick-up location" autoComplete="on"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-map-marker i-envelope" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <label htmlFor="dropoff" className="lit-14">Drop-off Point</label>
                                                    <div className="input-field">
                                                        <input type="text" className="px-4 py-3 mb-2 text-black border border-transparent rounded lit-14" name="dropoff" placeholder="Enter drop-off location" autoComplete="on"/>
                                                        <div className="input-icon">
                                                            <i className="fa fa-map-marker i-envelope" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={12}>
                                                    <div className="d-flex align-items-center justify-content-center">
                                                        <button className="signin-btn">FIND
                                                        </button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>
                                    </Col>
                                    
                                    <Col lg={8}>
                                        <div className="map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.580948428308!2d90.40314653488771!3d23.790474400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70cf670b531%3A0x7fe5a40e0e4f1287!2sCare%20Pharmacy!5e0!3m2!1sen!2sbd!4v1634665638772!5m2!1sen!2sbd" width="100%" height="630" allowfullscreen="" loading="lazy"></iframe>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
               </Container>
           </section>
        </>
    );
};

export default Contact;