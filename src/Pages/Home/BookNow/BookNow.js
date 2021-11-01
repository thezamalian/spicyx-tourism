import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const BookNow = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const { user } = useFirebase();
    const [pack, setPack] = useState({});
    const { packageId } = useParams();

    // Loading a single element just with it's ID
    useEffect(() => {
        fetch(`https://grisly-barrow-77099.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => {
                setPack(data);
                // console.log(data);
            })
    }, []);
    const { name, image, detail } = pack;

    const onSubmit = data => {
        const bookedPack = { name, image, detail };
        bookedPack.isPending = true;
        bookedPack.user = data;
        // console.log(data, bookedPack);

        // posting a new booked package with user information
        fetch('https://grisly-barrow-77099.herokuapp.com/manage-packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedPack)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package is Booked Successfully!');
                    reset();
                }
            })
    };

    console.log(watch("example"));



    return (
        <div>
            <h2 className='mx-auto'>Get the happiness right now!</h2>

            <div className='row row-cols-1 row-cols-md-2 my-3' style={{ height: '' }}>
                <div>

                    <div className=" rounded-5 shadow-lg"  >
                        <div className="d-flex flex-column  h-100 p-3 pb-3  text-shadow-1">
                            <img width="" className='img-fluid mx-auto' src={image} alt="" />
                            <h3>{name}</h3>
                            <p>{detail}</p>
                        </div>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='my-3'>
                    <input className=' mx-auto w-75 mt-3 mb-2 ' defaultValue={user.displayName} {...register("name", { required: true })} />


                    <input className='mx-auto w-75 mb-2 ' defaultValue={user.email}  {...register("email", { required: true })} />
                    <br />
                    {errors.email && <span className="error">This field is required</span>}
                    <br />

                    <input className='mx-auto w-75 mb-2 ' placeholder="Phone"  {...register("phone")} />

                    <input className='mx-auto w-75 mb-2 ' placeholder="Address"   {...register("address")} />

                    <input type="date" className='mx-auto w-75 mb-2 ' placeholder="date"   {...register("date")} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-success w-50' type="submit" value="Start Tour" />
                </form>
            </div>
        </div>
    );
};

export default BookNow;