import React from 'react'


const Contact = () => {

    const handlesend = (e) => {
        e.preventDefault()
        return alert("Thank you for contacting with us.")
    }

  return (
    <div>
      <title>Contact with us</title>
      <div>
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-800">Contact us!</h1>
            <p className="py-6">
                Your thougts and feedback is really valuable for us.<br></br>
                Feel free to share your opinion with us to make us better.
            </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handlesend} className="fieldset">
                <label className="label">Your name</label>
                <input name='name' type="text" className="input" placeholder="Type your name here" required/>

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" required/>

                <fieldset className="fieldset">
                <label className="label">Your message</label>
                <textarea className="textarea h-24" placeholder="Type your message here" required></textarea>
                </fieldset>
                
                
                <button type='submit' className="btn btn-neutral mt-4 bg-gray-800">Send your thoughts!😀</button>
                </form>
            </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
