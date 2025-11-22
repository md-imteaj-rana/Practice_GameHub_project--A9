//import Link from 'daisyui/components/link'
import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div>
      <title>Login to GameHub</title>
      <div>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-800">Login now to Enjoy Games!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form className="fieldset">
                <label className="label text-gray-800">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label text-gray-800">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover text-red-700 underline">Forgot password</a></div>
                <div className='underline'><Link to={'/Register'}>New at GameHub? Register now.</Link></div>
                <button className="btn btn-neutral mt-4 bg-gray-800">Login</button>
                </form>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
