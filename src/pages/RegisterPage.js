import React, { useState } from 'react'
import Layout from '../components/Layout'
function RegisterPage() {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [cpassword, setCpassword]=useState('');

  return (<Layout>
    <div className='register-parent'>
      <div className='row justify-content-center'>
        <div className='col-md-5'>

        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_5ngs2ksb.json"  background="transparent"  speed="1"    loop autoplay></lottie-player>        </div>
        <div className='col-md-4'>
          <div className='register-form'>
<form >
<h2>Register now</h2>
<hr/>
<input type='text' className='form-control' placeholder='email' value={email} onchange={(e)=>{setEmail(e.target.value)}}/>
<input type='text' className='form-control' placeholder='password' value={password} onchange={(e)=>{setPassword(e.target.value)}}/>
<input type='text' className='form-control' placeholder='confirm password' value={cpassword} onchange={(e)=>{setCpassword(e.target.value)}}/>
<button className='my-3'>Register</button>
</form>
</div>
        </div>
      </div>
    </div></Layout>
    )
}

export default RegisterPage;