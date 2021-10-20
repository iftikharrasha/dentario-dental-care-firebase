import React from 'react';
// import protection from '../../img/protection.png';
// import implants from '../../img/implants.png';
// import care from '../../img/care.png';
// import whitening from '../../img/whitening.png';
// import calculus from '../../img/calculus.png';
// import prevention from '../../img/prevention.png';
import { Container, Row, Col } from 'react-bootstrap';
import { services } from '../../FakeData/services';
import { Link } from 'react-router-dom';
import './GetRide.css';

const GetRide = () => {
    return (
        <>
            <section className="get-ride py-5" id="getride">
                <Container className="c_custom">
                        <Row>
                            <Col md={12}>
                                <h2 className="reg-48 text-white"> <strong>Our Services</strong></h2>
                                <p className="py-3 lit-14 text-white">Choose a category that suits your dental issue. We got your back!</p>
                            </Col>
                            <Col md={12} className="mt-5">
                                <Row className="d-flex align-items-center justify-content-center">

                                {services.map((service) => (
                                    <Col xl={4} sm={6} className="d-flex align-items-center justify-content-center p-4" key={service.id}>
                                        <div className="rides">
                                            <div className="ride-item text-center">
                                                <h3 className="text-center semi-28">{service.name}
                                                </h3>
                                                <img src={service.img} className="py-3" alt="rentals"/>
                                                <div className="ride-extra">
                                                    <p>
                                                        <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                                        <span className="ml-2">{service.title}</span> 
                                                    </p>
                                                </div>
                                                <Link to={`/ride-search/${service.route}`}>
                                                    <button className="btn btn-tag-1 mt-3">Read More</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                ))}

                                </Row>

                            </Col>
                        </Row>
                </Container>
            </section>
        </>
    );
};

export default GetRide;