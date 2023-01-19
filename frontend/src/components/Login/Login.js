import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from "react-router-dom"
import { login } from '../../redux/actions/userActions';

import "./Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  }
  return (
    <div>
     <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
               
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address"  onChange={(e)=>setEmail(e.target.value)} value={email} />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input type="password" id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  
              
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}   onClick={handleLogin}>Login</button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/Register">create account</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          {/* Right */}
        </div>
      </section>
    
    </div>
  )
}

export default Login