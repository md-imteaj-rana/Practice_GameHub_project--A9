import React from 'react'
import { useParams } from 'react-router'
import auth from '../Firebase/firebase.config'
import { sendPasswordResetEmail } from 'firebase/auth'

const ForgetPass = () => {

    const {email} = useParams();
    

    const handleSubmitForget = (e) => {
        e.preventDefault();
        const forgetEmail = e.target.email.value;
        sendPasswordResetEmail(auth, forgetEmail)
        .then(() => {
            window.open('https://mail.google.com/mail/u/0/')
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            console.log(error)
            // ..
        });
    }

  return (
    <div>
        <title>Forget password</title>
      <div className='flex justify-center items-center flex-col gap-3'>
        <form onSubmit={handleSubmitForget} className="fieldset">
                <label className="label text-gray-800">Email</label>
                <input defaultValue={email} name='email' type="email" className="input" placeholder="Email" />
                <button className="btn btn-neutral mt-4 bg-gray-800">Forget password</button>
            </form>
      </div>
    </div>
  )
}

export default ForgetPass
