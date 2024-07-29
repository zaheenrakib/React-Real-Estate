import React, { useContext, useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../Hooks/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { getAuth, updateEmail } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const Update = () => {
    const { register, handleSubmit, setValue, formState: { errors }, } = useForm();
    const { user, emailUpdate } = useContext(UserContext);
    const [userName, setUserName] = useState(user?.displayName || '');
    const [userEmail, setUserEmail] = useState(user?.email || '')
    const [photos, setPhotos] = useState(user?.photoURL || '')
    const auth = getAuth(app)
    const navigate = useNavigate();
    console.log(user);
    const onSubmit = (data) => {
        console.log(data.name, data.email);
        updateEmail(data.name, data.email)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Email Update",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
        // profileUpdate(data.name, data.photo)
        //     .then(() => {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Profile Updated",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //         navigate('/')
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }




    return (
        <>
            <Helmet>
                <title>NovaNest| Update</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <div>
                    <div className="hero bg-base-200">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body  mt-20 w-[670px] h-[635px]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={userName}
                                    {...register("name", { required: true })}
                                    placeholder="Name"
                                    onChange={(e) => {
                                        setUserName(e.target.value);
                                        setValue('name', e.target.value); // Update form value
                                    }}
                                    className="input input-bordered" />
                                {/* {errors.name && <span className='text-red-500 text-center'>Name field is required</span>} */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    value={userEmail}
                                    {...register("email", { required: true })}
                                    placeholder="email"
                                    onChange={(e) => {
                                        setUserEmail(e.target.value);
                                        setValue('email', e.target.value); // Update form value
                                    }}
                                    className="input input-bordered" />
                                {/* {errors.email && <span className='text-red-500 text-center'>Email field is required</span>} */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"
                                    value={photos}
                                    {...register("photo", { required: true })}
                                    placeholder="PhotoURL"
                                    onChange={(e) => {
                                        setPhotos(e.target.value);
                                        setValue('photo', e.target.value); // Update form value
                                    }}
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-success text-white" type="submit" value="Update Profile" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update;