import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import Direction from '../../Components/Direction/Direction.js';
import './RideSearch.css';

const RideSearch = () => {
    const { serviceRoute } = useParams();
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');

    return (
        <>
           <section className="ride-search py-5">
               <Container className="c_custom">
                        <Row>
                            <Col lg={4} className="mb-lg-0 mb-5">
                                <form className="ride-bg form bg-tag-1">
                                    <Row>
                                        <Col md={12}>
                                            <p className="ride-title mb-5 medi-30"> <strong>Ready to roll?</strong><br/>Get your estimation.</p>
                                        </Col>
                                        <Col md={12}>
                                            <p className="mb-3"><i class="fa fa-hand-o-right" aria-hidden="true"></i><span class="ml-2">Ride Picked: {serviceRoute}</span></p>
                                            <label htmlFor="pickup" className="lit-14">Pick-up Point</label>
                                            <div className="input-field">
                                                <input className="px-4 py-3 mb-2 text-black border border-transparent rounded lit-14" type="text" name="pickup" onBlur={e => setOrigin(e.target.value)} placeholder="Enter pick-up location" autoComplete="on"/>
                                                <div className="input-icon">
                                                    <i className="fa fa-map-marker i-envelope" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <label htmlFor="dropoff" className="lit-14">Drop-off Point</label>
                                            <div className="input-field">
                                                <input type="text" className="px-4 py-3 mb-2 text-black border border-transparent rounded lit-14" name="dropoff" onBlur={e => setDestination(e.target.value)} placeholder="Enter drop-off location" autoComplete="on"/>
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
                                    <Direction origin={origin} destination={destination}></Direction>
                                </div>
                            </Col>
                        </Row>
               </Container>
           </section>
        </>
    );
};

export default RideSearch;