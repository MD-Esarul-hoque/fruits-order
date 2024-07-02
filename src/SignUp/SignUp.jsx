import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthPovider";
import img1 from "../assets/images/sign up.jpg";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";


const SignUp = () => {
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();

    const { createUser } = useContext(AuthContext);

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                Swal.fire({
                    title: "Your SignUp  Successfully",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen py-20">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-yellow-600 mb-5 text-center">SignUp now!</h1>
                    <img src={img1} alt=""/>
                </div>
                <div className="card bg-base-100 w-full  shadow-2xl">
               
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name="fname" {...register("fname", { required: true })} placeholder="First name" className="input input-bordered" required />
                            {errors.fname && <span className="text-red-600 mt-2">First Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name="lname" {...register("lname", { required: true })} placeholder="Last name" className="input input-bordered" required />
                            {errors.lname && <span className="text-red-600 mt-2">Last Name is required</span>}
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Age</span>
                            </label>
                            <input type="number" name="age" {...register("age", { min: 18, max: 99 })} placeholder="Age" className="input input-bordered" required />
                            {errors.age && <span className="text-red-600 mt-2">Age is required. Minimum age is 18 and Maximum age is 99</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600 mt-2">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" required />
                            {errors.password && <span className="text-red-600 mt-2">Password is required. Minimum 6 to 20 character, one Upperase,one LowerCase</span>}

                        </div>

                        <div className="form-control mt-6">

                            <input className="btn bg-rose-500 text-white" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='text-center mb-4'><small >New Here? <Link className='text-yellow-600' to="/login">Login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;