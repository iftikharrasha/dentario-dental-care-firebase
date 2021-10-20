import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.webp';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className="footer mt-5 bg-tag-1">
            <Container className="c_custom">
                    <Row className="pt-4">
                        <Col sm={12} className="text-center">
                            <div className="foot-slogan">
                                <img src={logo} alt="Logo" className="img-fluid"/>
                            </div>
                        </Col>
                        <Col sm={12} className="text-center">
                            <div className="foot-links pt-3">
                                <Link to="/signup" className="c-tag-3 reg-20">Join Us </Link>
                                <Link to="/privacy-policy" className="c-tag-3 reg-20">| Privacy Policy </Link>
                                <Link to="/faq" className="c-tag-3 reg-20">| FAQ</Link>
                            </div>
                        </Col>
                        <Col sm={12} className="text-center">
                            <div className="copyright-text">
                                <p>Copyright 2021 © dentario</p>
                            </div>
                        </Col>
                    </Row>
            </Container> 
        </footer>
        </>
    );
};

export default Footer;