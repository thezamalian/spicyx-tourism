import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';

const AllBookedPackages = () => {
    const [packs, setPacks] = useState([]);
    const { user } = useFirebase();

    useEffect(() => {
        // console.log(user);
        // getting all of the booked packages: Booked by all user
        fetch(`https://grisly-barrow-77099.herokuapp.com/manage-packages`)
            .then(res => res.json())
            .then(data => {
                setPacks(data);
                // console.log(data);
            });
    }, [user.email]);
    // email dependency to update this page's state after login

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://grisly-barrow-77099.herokuapp.com/packages/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount) {
                        const remaining = packs.filter(pack => pack._id !== id);
                        setPacks(remaining);
                    }
                })
        }

    }

    const handleUpdate = (id, pack) => {
        const url = `https://grisly-barrow-77099.herokuapp.com/manage-packages/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pack)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Your package is approved.')
                }
            })
    }

    return (
        <div className='mb-5'>
            <h2 className='my-5'>All Booked Packages!</h2>

            <div className='row row-cols-4 row-cols-md-4  my-2'>
                <h5 className='ps-5'>Package Name</h5>
                <p className='ps-5'>User Name </p>
                <p>Status</p>
                <p>Action</p>
            </div>

            {/* A section with Read, Update & Delete APIs */}
            <ul className='unstyled-list' style={{ listStyle: 'none' }}>
                {
                    packs.map(pack => <li key={pack._id}>
                        <div className='row row-cols-4 row-cols-md-4 flex-wrap my-2'>
                            <h5>{pack?.name}</h5>
                            <p>{pack?.user?.name} </p>
                            {
                                pack?.isPending ? <div>
                                    <span>Pending </span>
                                    <button onClick={() => {
                                        pack.isPending = false;
                                        const updatedPacks = [...packs];
                                        setPacks(updatedPacks);
                                        handleUpdate(pack._id, pack);
                                    }
                                    } className='ms-2 btn btn-success'>Approve</button> </div>
                                    : <p>Approved </p>
                            }

                            <div className='w-25'>
                                <button onClick={() => handleDelete(pack._id)} className='btn btn-danger '>Delete</button>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AllBookedPackages;