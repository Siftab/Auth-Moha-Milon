import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/authProvider';

const Login = () => {
  const {signInUser}=useContext(AuthContext)
    
   const handleFormSubmit=e=>{
    e.preventDefault();
    const email =e.target.email.value;
    const password=e.target.password.value;
        // console.log('ok working',e,email,password)
        signInUser(email,password)
        .then(res=>{
          console.log(res.user)
        })
        .catch(err=>{
          console.log(err)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleFormSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
        <p >don't have a account , please  <Link to='/register' className='text-blue-600'>SignUp</Link></p>
      </form>
    </div>
    
  </div>
</div>
    );
};

export default Login;