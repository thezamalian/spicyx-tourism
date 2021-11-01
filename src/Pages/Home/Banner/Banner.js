import React from 'react';
import bannerSitting from '../../../images/banner-sitting.jpg'
import bannerVan from '../../../images/travel-van.jpg'
import bannerSun from '../../../images/plane-sun.jpg'

const Banner = () => {
    // carousel system has been used instead of just a banner
    return (
        <div className='banner-container' >

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={bannerSitting} className="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Ponder with SpicyX</h1>
                            <p>Pack your bags, Come with us, Take a seat, See the nature.</p>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={bannerVan} className="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block text-dark">
                            <h1>SpicyX with All Historic Places.</h1>
                            <p>We will take you trough many great historic and valuable lands.</p>
                        </div>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={bannerSun} className="d-block w-100" style={{ height: '40vw' }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1>SpicyX - Visit the Whole World!</h1>
                            <p>Take our planes to get a greater view of you path.</p>
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