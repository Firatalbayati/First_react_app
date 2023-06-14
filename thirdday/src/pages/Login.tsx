import React, {useEffect, useState} from 'react'
import { login } from '../services/DummyService'
import { Jwt } from '../models/Jwt'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const [username, setUsername] = useState('')  //kminchelle
    const [password, setPassword] = useState('')  //0lelplR

    const sendForm = (evt:React.FormEvent) =>{
     evt.preventDefault()

     if(username == ""){
        toast.error("User Empity!");
     }else if (password ==""){
        toast.error("Password Empity!")
     }

     const sendJwt:Jwt = {
        username: username,
        password: password
    }
    login(sendJwt).then( res =>{
      if(res != null && res.status === 200 && res.data.token){
           sessionStorage.setItem("token",res.data.token!) //tokennı aldık ve sessionStorage içine attık
           toast.success(res.status)
           navigate('/dashboard')
      }
        console.log(res.data.token)
    }).catch(err => {
        console.error(err)
        toast.error(err.message)
    })
    }

  return (
    <form onSubmit={sendForm}>
       <h2>Admin Login</h2>
     <div className="mb-3">
       <label htmlFor="exampleInputusername1">Username</label>
       <input onChange={(evt) => setUsername(evt.target.value)} type="username" className="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" placeholder="Username" />
     </div>
     <div className="mb-3">
       <label htmlFor="exampleInputPassword1">Password</label>
       <input onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
     </div>
     <div className="mb-3 form-check">
       <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
       <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
     </div>
     <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login