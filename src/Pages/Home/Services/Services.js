import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';

/* const services = [
    {
        name: "Family Tour",
        image: "https://i.ibb.co/Y7wvvq3/img-card-12.jpg",
        detail: "Small travellers, big fun. If one family member isn't having a good time, nobody is. We give each Family tour a Recommended Age rank so parents."
    },
    {
        name: "Couple Tour",
        image: "https://i.ibb.co/87fqLWT/img-card-13.jpg",
        detail: "One of the best parts of being in a relationship is having a built-in travel buddy ... A great way to bond as a couple is by getting active"
    },
    {
        name: "Adventure Tour",
        image: "https://i.ibb.co/c6L7f2S/img-card-4.jpg",
        detail: "Discover the Great Barrier Reef and Green Island with Great Adventures Cruises. With a choice of day trips to beautiful Green Island and to the spectacular."
    },

    {
        name: "Relaxing Special",
        image: "https://i.ibb.co/9W29bPp/img-card-5.jpg",
        detail: "Maybe the most well-known and the best relaxing destination in the world is Bali. This tranquil island in Indonesia is known for being."
    },
    {
        name: "Family Adventure",
        image: "https://i.ibb.co/2k5VQsJ/img-card-7.jpg",
        detail: "Family trips are a great way for children to meet and interact with other kids from around the world who are close to their own age and share common interests."
    },
    {
        name: "Great Honeymoon",
        image: "https://i.ibb.co/w44MyvG/img-card-8.jpg",
        detail: "Honeymoon destination ideas for a once-in-a-lifetime escape. ... Tom Merchant is the co-founder of luxury travel company and trip planner."
    },
] */

const Services = () => {
    const [services, setServices] = useState([]);

    // loading all the packages to show them on the UI
    useEffect(() => {
        fetch('https://grisly-barrow-77099.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                // console.log(data);
            })
    }, []);

    return (
        <div className='mt-5 mx-3'>
            <h2 className='mb-3 '>Best Packages for You</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                {
                    services.map(service => <SingleService key={service._id} service={service} ></SingleService>)
                }

            </div>
        </div>
    );
};

export default Services;