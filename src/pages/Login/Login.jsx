import { useContext,   } from 'react';


import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthPovider';
import img1 from"../../assets/images/log in.png";
import Swal from 'sweetalert2'

const Login = () => {
    
    

    const { signIn } = useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname||"/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Your Login  Successfully",
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
                  navigate(from,{replace:true});
            })
    }
    

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen py-20">
                <div className="hero-content flex-col lg:flex-row-reverse  ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-yellow-600 mb-5 text-center">Login now!</h1>
                        <img src={img1} alt="" />
                    </div>
                    <div className="card bg-base-100 w-full  shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                          
                            <div className="form-control mt-6">

                                <input className="btn bg-rose-500 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center mb-4'><small >New Here? <Link className='text-yellow-600' to="/signup">Create a new account</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;