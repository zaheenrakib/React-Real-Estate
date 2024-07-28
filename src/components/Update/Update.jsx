import React, { useContext } from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { useForm } from 'react-hook-form';
import { UserContext } from '../Hooks/AuthProvider';
// const { register, handleSubmit, formState: { errors }, } = useForm();

const Update = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <form className="card-body w-[670px] h-[635px]">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" value={user?.displayName} placeholder="Name" className="input input-bordered" />
                            {/* {errors.name && <span className='text-red-500 text-center'>Name field is required</span>} */}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" value={user?.email} placeholder="email" className="input input-bordered" />
                            {/* {errors.email && <span className='text-red-500 text-center'>Email field is required</span>} */}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" value={user?.photoURL} placeholder="PhotoURL" className="input input-bordered" />
                            {/* {errors.photo && <span className='text-red-500 text-center'>PhotoURL field is required</span>} */}
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type='password' value={user?.password} placeholder="password" className="input input-bordered" />
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

                        </div> */}
                        <div className="form-control mt-6">
                            <input className="btn btn-success text-white" type="submit" value="Update Profile" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;