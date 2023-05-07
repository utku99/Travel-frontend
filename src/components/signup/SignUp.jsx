import React from 'react'

const SignUp = () => {
  return (
    <div className='form-container'>
      <h1>Send form to sign up</h1>
      <form>
        <input placeholder='Email' required/>
        <input type='password' placeholder='Password' required/>
        <button>Send</button>
      </form>
    </div>
  )
}

export default SignUp
