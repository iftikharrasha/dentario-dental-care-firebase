import React from 'react';
import banner from '../../img/banner.webp';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="hero rounded py-5" id="home">
                <Container className="c_custom">
                    <div className="hero-bg bg-tag-1">
                        <Row>
                            <Col md={12} className="d-flex justify-content-between aligh-items-center">

                                <Row>
                                    <Col lg={6}>
                                        <div className="hero-left p-sm-5">
                                            <h1 className="reg-48 c-tag-1"><strong className="font-bold">Professional <br /></strong>  
                                             Dental Care
                                            </h1>
                                            <p className="pt-3 c-tag-1 lit-20">Our focus is on your overall well being and helping you achieve optimal health and esthetics. 
                                            </p>
                                            <p className="py-3 c-tag-1 lit-20">We provide state-of-the-art dental care in a comfortable.
                                            </p>
                                            <div className="login-btn pt-3">
                                                <a href="#getride" className="btn-tag-1 medi-14">
                                                    <i className="fa fa fa-search"></i>
                                                    <span className="ml-2">Find a dentist</span>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="mt-sm-0 mt-5 d-flex justify-content-center align-items-center">
                                        <div className="hero-right">
                                            <img src={banner} alt="Banner" className="img-fluid w-100"/>
                                        </div> 
                                    </Col>
                                </Row>
                            </Col>
                    </Row>
                    </div>
                </Container>
            </section>

        </>
    );
};

export default Home;