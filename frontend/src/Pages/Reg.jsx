import React from 'react'
import { useState } from 'react'
import Adlogin from './Adlogin'

function Reg() {
    const [name,setName] = useState("")
    const [number,setNumber] = useState("")
    const [altnumber,setAltnumber] = useState("")
    const [gender, setGender] = useState("")
    const [bloodgroup, setBloodgroup] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")

  return (
   <div className="row">
        <div className="col-md-8 mx-auto p-5 my-5">
            <form onSubmit={adlog} className="p-5 rounded-4 shadow-lg w-75 mx-auto">
                <h4>Patient Registration Form</h4>
                <label htmlFor="">Enter Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/>
                <br />
                <label htmlFor="">Enter Number</label>
                <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} className='form-control'/>
                <br />
                <label htmlFor="">Enter Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
                <br />
                <label htmlFor="">Enter Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
                <br />
                <label htmlFor="">Enter Age</label>
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} className='form-control'/>
                <br />
                <label htmlFor="">Select Gender:</label>
                <select ClassName="form-control"  value={gender}>

                </select>
                <input type="submit" value="Login" className="btn btn-primary form-control" />
            </form>
        </div>
    </div>
  )
}

export default Reg
