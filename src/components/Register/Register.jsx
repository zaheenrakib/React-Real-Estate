import React, { useContext, useState } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthProvider, UserContext } from '../Hooks/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const navigate = useNavigate();

    const { createUser } = useContext(UserContext);

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);

    }


    const auth = getAuth(app);

    const onSubmit = (data) => {
        // createUserWithEmailAndPassword(auth,data.email,data.password)
        // .then((result) => {
        //     const loggedUser = result.user;
        //     console.log(loggedUser);
        //     Swal.fire({
        //         position: "top-end",
        //         icon: "success",
        //         title: "User Created",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        //     navigate('/');
        //   })
        // console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User Created",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <>
            <Helmet>
                <title>NovaNest | Sign Up</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
                <div className="hero min-h-screen bg-base-200">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[670px] h-[635px]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500 text-center'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500 text-center'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                            {errors.photo && <span className='text-red-500 text-center'>PhotoURL field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Za-z])(?=.*?[0-9])(?=.*[@$!%*#?&])/
                                })}
                                placeholder="password"
                                name='password'
                                className="input input-bordered" />
                            <button
                                style={{
                                    position: 'absolute',
                                    top: '45%',
                                    right: '2%',
                                    transform: 'translateY(50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '20px'
                                }} className=' absolute top-' onClick={togglePasswordVisibility}>
                                {
                                    showPassword ? <FaEye /> :  <FaEyeSlash />
                                }
                            </button>
                            {errors.password?.type === "required" &&
                                <p className='text-red-500 text-center'>Password is required</p>
                            }
                            {errors.password?.type === "pattern" &&
                                <p className='text-red-500 text-center'>Password must
                                    have one uppercase one lowercar
                                    one special characters  required</p>
                            }
                            {errors.password?.type === "minLength" &&
                                <p className='text-red-500 text-center'>Password must be 6 characters</p>
                            }
                            {errors.password?.type === "maxLength" &&
                                <p className='text-red-500 text-center'>Password must be less than 20 characters</p>
                            }

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;