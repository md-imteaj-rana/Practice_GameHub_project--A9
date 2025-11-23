import React from 'react'

const ForgetPass = () => {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="fieldset">
                <label className="label text-gray-800">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
            </form>
      </div>
    </div>
  )
}

export default ForgetPass
