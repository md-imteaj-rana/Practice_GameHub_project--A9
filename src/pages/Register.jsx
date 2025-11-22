import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider'
import { updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

const Register = () => {

    const {registerWithEmailAndPassword, setUser, user} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const name = e.target.name.value;
        const imageurl = e.target.imageurl.value;

        registerWithEmailAndPassword(email, pass)
        .then((userCredential) =>{
            //const user = userCredential.user
            updateProfile(auth.currentUser, {
            displayName: name, photoURL: imageurl
            }).then(() => {
                setUser(userCredential.user)
            // Profile updated!
            // ...
            }).catch((error) => {
                console.log(error)
            // An error occurred
            // ...
            });
        })
        .catch((error) => {
        console.log(error)
         });

    }

  return (
    <div>
      <title>Register to GameHub</title>
      <div>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex flex-col">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-800">Register now to Enjoy Games!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                <label className="label text-gray-800">Name</label>
                <input name='name' type="text" className="input" placeholder="Enter your name" />
                <label className="label text-gray-800">Image URL</label>
                <input name='imageurl' type="text" className="input" placeholder="Image URL" />
                <label className="label text-gray-800">Email</label>
                <input name='email'type="email" className="input" placeholder="Email" />
                <label className="label text-gray-800">Password</label>
                <input name='password'type="password" className="input" placeholder="Password" />
                <div className='underline'><Link to={'/Login'}>Already have an account? Login.</Link></div>
                <button className="btn btn-neutral mt-4 bg-gray-800">Register</button>
                </form>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Register
