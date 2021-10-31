import React from 'react';
import { useForm } from "react-hook-form";
import burjKhalifa from '../../../images/burj-khalifa.jpg'


const BookNow = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <div>
            <h2 className='mx-auto'>Get the happiness right now!</h2>

            <div className='row row-cols-1 row-cols-md-2 my-3' style={{ height: '' }}>
                <div>

                    <div className=" rounded-5 shadow-lg"  >
                        <div className="d-flex flex-column  h-100 p-3 pb-3  text-shadow-1">
                            <img width="200px" className='img-fluid mx-auto' src={burjKhalifa} alt="" />
                            <h3>Service Name</h3>
                            <h4 className='text-muted'>Traveller</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione</p>
                        </div>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='my-3'>
                    <input className=' mx-auto w-75 mt-3 mb-2 form-control' defaultValue="Name" {...register("name", { required: true })} />


                    <input className='mx-auto w-75 mb-2 form-control' defaultValue="Email"  {...register("email", { required: true })} />
                    <input className='mx-auto w-75 mb-2 form-control' placeholder="Phone"  {...register("phone", { required: true })} />

                    <input className='mx-auto w-75 mb-2 form-control' placeholder="Address"   {...register("address", { required: true })} />

                    <input type="date" className='mx-auto w-75 mb-2 form-control' placeholder="date"   {...register("date", { required: true })} />

                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-success w-50' type="submit" value="Start Tour" />
                </form>
            </div>
        </div>
    );
};

export default BookNow;