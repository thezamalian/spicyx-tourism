import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';

const MyPackages = () => {
    const [myPacks, setMyPacks] = useState([]);
    const { user } = useFirebase();

    // just loading the pages: booked by only this user 
    useEffect(() => {
        // console.log(user);
        fetch(`https://grisly-barrow-77099.herokuapp.com/my-packages/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyPacks(data);
                // console.log(data, myPacks);
            });
    }, [user.email, myPacks]);
    // myPacks is added as a dependency here - it is updated so many times 

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
                        const remaining = myPacks.filter(pack => pack._id !== id);
                        setMyPacks(remaining);
                    }
                })
        }

    };

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
            <h2 className='my-5'>All Of Your Booked Packages!</h2>

            <div className='row row-cols-4 row-cols-md-4  my-2'>
                <h5 className='ps-5 border-bottom'>Package Name</h5>
                <p className='ps-5 border-bottom'>User Name </p>
                <p className='ps-5 border-bottom'>Status</p>
                <p className='ps-5 border-bottom'>Action</p>
            </div>

            <ul className='unstyled-list' style={{ listStyle: 'none' }}>
                {
                    myPacks.map(pack => <li key={pack._id}>
                        <div className='row row-cols-4 row-cols-md-4 flex-wrap my-2'>
                            <h5>{pack?.name}</h5>
                            <p>{pack?.user?.name} </p>
                            {
                                pack?.isPending ? <div>
                                    <span>Pending </span>
                                    <button onClick={() => {
                                        pack.isPending = false;
                                        const updatedPacks = [...myPacks];
                                        setMyPacks(updatedPacks);
                                        handleUpdate(pack._id, pack);
                                    }} className='ms-2 btn btn-success'>Approve</button> </div>
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

export default MyPackages;