import { useContext } from 'react';


import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }



    return (
        <>

            <div className="hero min-h-screen bg-slate-300">
                <div className="hero-content flex-col ">
                    <h2 className='text-5xl text-center'>LogIn</h2>
                    <div className="card  shadow-2xl bg-base-100  rounded-none">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn rounded-none bg-gray-600 text-white" type="submit" value="Sign Up" />
                            </div>
                            <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;