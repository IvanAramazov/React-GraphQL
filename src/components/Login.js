import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/login',
            headers: { 'Content-Type': 'application/json' },
            data: {
                email: emailInput,
                password: passwordInput
            }
        }).then(res => {
            localStorage.setItem("userId", res.data.id)
            history.push("/");
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div class="row">
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Graph</b>QL</a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={handleSubmit.bind(this)}>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" onChange={e => setEmailInput(e.target.value)} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPasswordInput(e.target.value)} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign In</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>

        </div>
    );
}

export default Login;