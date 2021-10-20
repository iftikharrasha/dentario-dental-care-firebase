import React, { useContext } from 'react';
import logo from '../../img/logo.webp';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import firebase from "firebase/compat/app";
import './Header.css';

import {UserContext} from "../../App";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then((res) => {
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            success: false,
            error: ''
          }
          setLoggedInUser(signedOutUser);
        }).catch((error) => {
          // An error happened.
          console.log(error);
        });
      }

    return (
        <>
            <header className="header">
                <Navbar collapseOnSelect expand="lg">
                    <Container className="c_custom py-4">
                        <Navbar.Brand as={Link} to="/" className="brand">
                            <img
                                src={logo}
                                width="100%"
                                height="100%"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto medi--20 menu">
                                <Nav.Link className="mr-4 c-tag-2" as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link className="mr-4 c-tag-2" as={Link} to="/service">Services</Nav.Link>
                                <Nav.Link className="mr-4 c-tag-2" as={Link} to="/contact">Contact</Nav.Link>
                                {
                                    loggedInUser.isSignedIn ? <Dropdown>
                                                                <Dropdown.Toggle variant="" id="dropdown-basic" className="d-flex align-items-center">
                                                                    <span className="avatar mr-2">
                                                                        <img alt={loggedInUser.name} src={loggedInUser.photo}/>
                                                                    </span>
                                                                    <span className="mb-0">{loggedInUser.name}</span>
                                                                </Dropdown.Toggle>

                                                                <Dropdown.Menu>
                                                                    <Link to="/ride-search" className="dropdown-item lit-14">Find Ride</Link>
                                                                    <Link to="/" className="dropdown-item lit-14" onClick={handleSignOut}>Sign Out</Link>
                                                                </Dropdown.Menu>
                                                            </Dropdown> : 
                                                            <Link to="/login" className="btn-tag-1 lit-14"><i className="fa fa fa-user"></i><span className="ml-2">Login</span></Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;