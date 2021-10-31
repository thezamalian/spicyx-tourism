import React from 'react';
import bannerSitting from '../../../images/banner-sitting.jpg'
import bannerVan from '../../../images/travel-van.jpg'
import bannerSun from '../../../images/plane-sun.jpg'

const Banner = () => {
    return (
        <div className='banner-container' >

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={bannerSitting} className="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>1st slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={bannerVan} className="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>2nd slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={bannerSun} className="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>3rd slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;