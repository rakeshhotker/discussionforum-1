import React from 'react'
import "./login.css"
function Login() {
    
    return (
        <div>
            <div class="left">
                <div id="heading">
                    <h3>Vasavi Connect</h3>
                    <p>A place to meet like minded peers...</p>
                </div>
                <div id="greeting">
                    <p>Welcome back! Please login to your account</p>
                </div>
                <div>
                    <h5>Login</h5>
                    <div>
                        <div>

                        </div>
                        <div id="email_field" class="credentials">
                            <label>Email Address</label>
                            <input placeholder= "enter email address" type="email"/>
                        </div>
                        <div id="email_field" class="credentials">
                            <label>Password</label>
                            <input placeholder= "enter password" type= "password"/>
                        </div>
                        <div>
                            <p><a href="#">Forgot Password?</a></p>
                        </div>
                    </div>
                </div>
                <div class="buttons">
                    <div id="Login">
                        <button>Login</button>

                    </div>
                    <div id="Sign Up">
                        <button>Sign Up</button>

                    </div>
                </div>
            </div>
            <div class="right">


            </div>
        
        </div>
    )

}

export default Login
