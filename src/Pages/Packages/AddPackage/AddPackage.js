import React from 'react';
import { useForm } from "react-hook-form";


const AddPackage = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    // useForm hook from react-hook-for is used for its simplicity about form input handling

    const onSubmit = data => {
        //  posting the data of a new package added by a user
        fetch('https://grisly-barrow-77099.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Package is Added Successfully!');
                    reset();
                }
            })
    };

    console.log(watch("example"));

    return (
        <div style={{ height: '' }} className='my-3'>
            <h2>Add a new Package</h2>


            <form onSubmit={handleSubmit(onSubmit)} className='my-3'>
                <input className=' mx-auto w-75 mt-3 mb-2 ' placeholder="Package Name" {...register("name", { required: true })} />


                <input className='mx-auto w-75 mb-2 ' placeholder="Image URL"  {...register("image", { required: true })} />
                <br />
                {errors.email && <span className="error">This field is required</span>}
                <br />
                <textarea className='mx-auto w-75 mb-2 ' placeholder="Details"  {...register("detail")} ></textarea>



                <input className='btn btn-success w-50' type="submit" value="Add Package" />
            </form>
        </div>
    );
};

export default AddPackage;