import React from 'react'

export default function Signup() {
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
            <button>Signup</button>
            <hr></hr>
        </div>
      )
}
