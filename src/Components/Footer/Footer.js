import React from 'react';
import logo from '../../img/logo.webp';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className="footer mt-5 bg-tag-1">
            <Container>
                <Row>
                    <Col>
                        <div className="footer-items">
                            <a href="#home">
                                <img src={logo} className="img-fluid w-25" alt="pathfinder"/>
                            </a>
                            <h6 className="lit-14 mt-4">Dentario©2021 All Rights Reserved</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    );
};

export default Footer;