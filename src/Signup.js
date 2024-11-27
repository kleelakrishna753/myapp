import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const Navigate = useNavigate() ;
    const handleLogin = () =>{
      Navigate('/login')
    }
    const handleSubmit = () => {
        alert('Your data is SOLD')
    }
    return (
        <div>
            <p>
                <input type="text" placeholder="Enter Name"></input>
            </p>        
            <p>
                <input type="number" placeholder="Enter Phone Number"></input>
            </p>
            <p>
                <input type="text" placeholder="Enter Email Address"></input>
            </p>
            <p>
                <input type="number" placeholder="Enter OTP"></input>
            </p>
            <p>
                <input type="password" placeholder="Enter Password"></input>
            </p>
            <p>
                <input type="password" placeholder="Retype Password"></input>
            </p>
            <p>
                <input type="checkbox"></input>Yes I read all T&C
            </p>        
            <button onClick={handleSubmit}>Signup</button>
            <br></br>
            <p>Already a User?</p>
            <button onClick={handleLogin}>Login</button>
            <hr></hr>
        </div>
      )
}
