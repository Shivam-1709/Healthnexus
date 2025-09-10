import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Adlogin() {
    const navigate=useNavigate();
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    async function adlog(e){
        e.preventDefault();
        const admin ={email,password};
        const response = await axios.post('http://localhost:8000/api/admin/log',admin);
        console.log(response);
        if(response.data.msg=="Success"){
            localStorage.setItem("admin","admin@gmail.com");
            setEmail("");
            setPassword("");
            navigate('/admindash');
        }
        else{
            window.alert("Something Went Wrong");
            setPassword("");
        }
    }
    
  return (
    <div className="row">
        <div className="col-md-8 mx-auto p-5 my-5">
            <form onSubmit={adlog} className="p-5 rounded-4 shadow-lg w-75 mx-auto">
                <h4>AdLogin Form</h4>
                <label htmlFor="">Enter Email</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
                <br />
                <label htmlFor="">Enter Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                <br />
                <input type="submit" value="Login" className="btn btn-primary form-control" />

            </form>

        </div>
    </div>
   
  )
}

export default Adlogin
