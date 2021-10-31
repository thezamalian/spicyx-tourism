import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';

const MyPackages = () => {
    const [myPacks, setMyPacks] = useState([]);
    const { user } = useFirebase();

    useEffect(() => {
        // console.log(user);
        fetch(`http://localhost:5000/my-packages/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyPacks(data);
                console.log(data);
            });
    }, [user.email]);

    const handleDelete = id => {
        // const confirm = 
        const url = `http://localhost:5000/packages/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    const remaining = myPacks.filter(pack => pack._id !== id);
                    setMyPacks(remaining);
                }
            })
    }


    return (
        <div className='mb-5'>
            <h2 className='my-5'>All Of Your Booked Packages!</h2>

            <div className='row row-cols-4 row-cols-md-4  my-2'>
                <h5 className='ps-5'>Package Name</h5>
                <p className='ps-5'>User Name </p>
                <p>Status</p>
                <p>Action</p>
            </div>

            <ul className='unstyled-list' style={{ listStyle: 'none' }}>
                {
                    myPacks.map(pack => <li key={pack._id}>
                        <div className='row row-cols-4 row-cols-md-4 flex-wrap my-2'>
                            <h5>{pack.name}</h5>
                            <p>{pack.user.name} </p>
                            <p>Status: Pending {" "}</p>

                            <button onClick={() => handleDelete(pack._id)} className='btn text-danger w-25'>X</button>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default MyPackages;