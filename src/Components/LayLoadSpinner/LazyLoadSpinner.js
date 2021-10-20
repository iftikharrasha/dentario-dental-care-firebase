import React from 'react';
import './LazyLoadSpinner.css';
import spinner from '../../img/preloader.gif';

const LazyLoadSpinner = () => {
    return (
        <>
            <section className="vh-100 vw-100 d-flex justify-content-center align-items-center">
                <img src={spinner} alt="spinner" className="img-fluid"/>
            </section>
        </>
    );
};

export default LazyLoadSpinner;