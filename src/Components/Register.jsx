import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
    const handleFormSubmit=e=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password=e.target.password.value;
        const name = e.target.name.value;
            console.log('ok working',name,email,password)
        }
        return (
            <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
        
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
            </div>
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
              <button type='submit' className="btn btn-primary">SignUp</button>
            </div>
            <p >Already have a account , please  <Link to='/login' className='text-blue-600'>Login</Link></p>
          </form>
        </div>
        
      </div>
    </div>
        );
};

export default Register;