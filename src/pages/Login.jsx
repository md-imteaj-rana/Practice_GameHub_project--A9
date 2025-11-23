//import Link from 'daisyui/components/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext } from 'react'
import { Link } from 'react-router'
import auth from '../Firebase/firebase.config'
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

  const {setUser, user} = useContext(AuthContext)

  const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;

        signInWithEmailAndPassword(auth, email, pass)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setUser(user)
          // ...
        })
        .catch((error) => {
          console.log(error)
        });

      }
      //console.log(user)

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
                <form onSubmit={handleSubmit} className="fieldset">
                <label className="label text-gray-800">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="label text-gray-800">Password</label>
                <input name='password' type="password" className="input" placeholder="Password" />
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
