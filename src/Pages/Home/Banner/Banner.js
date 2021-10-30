import React from 'react';
import bannerSitting from '../../../images/banner-sitting.jpg'
import bannerVan from '../../../images/travel-van.jpg'
import bannerSun from '../../../images/plane-sun.jpg'

const Banner = () => {
    return (
        <div className='banner-container' >

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={bannerSitting} class="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>1st slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={bannerVan} class="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>2nd slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={bannerSun} class="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>3rd slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                </div>


                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;