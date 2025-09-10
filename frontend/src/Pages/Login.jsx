import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    async function adlog(e){
        e.preventDefault();
        const user ={email,password,role};
        console.log(user);
    }
    
  return (
    <div className="row">
        <div className="col-md-8 mx-auto p-5 my-5">
            <form onSubmit={adlog} className="p-5 rounded-4 shadow-lg w-75 mx-auto">
                <h4>Login Form</h4>
                <label htmlFor="">Enter Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
                <br />
                <label htmlFor="">Enter Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                <br />
                <label htmlFor="">Select Role: </label>
                <select value={role} onChange={(e)=>setRole(e.target.value)} className="form-control">
                    
              <option value="">--Select Role---</option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
                </select>
                <br />
                <input type="submit" value="Login" className="btn btn-primary form-control" />
            </form>

        </div>
    </div>
   
  )
}

export default Login
