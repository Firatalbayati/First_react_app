import React from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const sendForm = (evt:React.FormEvent<HTMLFormElement>) =>{
         evt.preventDefault()
         
         localStorage.setItem("user","10")
         //window.location.href = '/dashboard' bu sayfayı tekrar yükler bunu kullanmamalıyız
         navigate('/dashboard') 
    }

  return (
    <form onSubmit={sendForm} className='col-sm-4'>
    <h2>Admin Login</h2>
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login