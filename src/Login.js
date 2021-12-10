import React from 'react'
import "./login.css"
function Login() {
    
    return (
        <div>
            <div class="left">
                <div id="heading" align="left">
                    <h2 id="main_name">Vasavi Connect</h2>
                    <p>A place to meet like minded peers...</p>
                </div>
                <div id="greeting" align="left">
                    <p>Welcome back! Please login to your account</p>
                </div>
                <div>
                    <h5 id ="login" align="left" >Login</h5>
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
            <div id="vertical-line" align="center"></div>
            <div class="right">
                <div class="navigation">
                    <h3 id="home_nav">Home</h3>
                    <h3 id="About_nav">About us</h3>
                    <h3 id="our_college">Our College</h3>
                </div>

            </div>
        
        </div>
    )

}

export default Login
