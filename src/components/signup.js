import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';


function Signup()
{
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [pass,setpass] = useState('');
   
    const [file,setfile] = useState('');

    const navigate = useNavigate();

    const signuprecord = async () =>
    {
        const formdata = new FormData();
  formdata.append("name",name);
  formdata.append("email",email)
  formdata.append("pass",pass)
  formdata.append("file",file)


  if(name == "")
  {
      Swal.fire({
          title: "Validation Message",
          text: "Name Field is Required*",
          icon: "wrong"
        });
  }
  else if(email == "" )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Email Field is Required*",
          icon: "wrong"
        });
  } 
  else if(!email.includes('@') )
  {
      Swal.fire({
          title: "Validation Message",
          text: "Wrong Email Syntax*",
          icon: "wrong"
        });
  } 
  else if(pass == "")
  {
      Swal.fire({
          title: "Validation Message",
          text: "Password Field is Required*",
          icon: "wrong"
        });
  } 

  else if(file == "")
  {
      Swal.fire({
          title: "Validation Message",
          text: "File is Required*",
          icon: "wrong"
        });
  } 
  else{


    await axios.post('http://localhost:4000/signup',
    formdata,{
        headers : {
            "Content-Type"  : "multipart/form-data"
        }
    
    })

    navigate('/login')
  }



    }
    return(
        <div>

<div class="container-fluid p-0 nav-bar">
        <nav class="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <Link to="/" class="navbar-brand">
                <h1 class="m-0 display-4 font-weight-bold text-uppercase text-white">Gymnast</h1>
            </Link>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div class="navbar-nav ml-auto p-4 bg-secondary">
                    <Link to="/" class="nav-item nav-link">Home</Link>
                    <Link to="/about" class="nav-item nav-link">About Us</Link>
                    <Link to="/class" class="nav-item nav-link">Classes</Link>
                    <Link to="/workout" class="nav-item nav-link">Workouts</Link>
                    <Link to="/blog" class="nav-item nav-link">Blog</Link>
                    <Link to="/diet" class="nav-item nav-link">Diet</Link>
                    <Link to="/membership" class="nav-item nav-link">MemberShip</Link>

                    <Link to="/contact" class="nav-item nav-link">Contact</Link>
                    <Link to="/signup" class="nav-item nav-link">Signup</Link>

                    <Link to="/login" class="nav-item nav-link">Login</Link>
                </div>
            </div>
        </nav>
    </div>
   
    <div class="container-fluid page-header mb-5">
        <div class="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" >
            <h4 class="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">Sign Up</h4>
            <div class="d-inline-flex">
                <p class="m-0 text-white"><a class="text-white" href="">Home</a></p>
                <p class="m-0 text-white px-2">/</p>
                <p class="m-0 text-white">Sign Up </p>
            </div>
        </div>
    </div>
   
  <div className="container">
    <input type="text"onChange={(e)=>setname(e.target.value)} placeholder="Name" className="form-control mt-3"/>
    <input type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)} className="form-control mt-3"/>
    <input type="password" placeholder="Password" onChange={(e)=>setpass(e.target.value)} className="form-control mt-3"/>
 <input type="file" onChange={(e)=>setfile(e.target.files[0])}  className="form-control  mt-3"/>

 <button onClick={signuprecord} className="btn btn-dark mt-3">Signup</button>
  </div>
  
  <div class="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
        <div class="row pt-5">
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-light mb-4">Get In Touch</h4>
                <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>

            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-light mb-4">Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <Link class="text-white mb-2" to="/"><i class="fa fa-angle-right mr-2"></i>Home</Link>
                    <Link class="text-white mb-2" to="/about"><i class="fa fa-angle-right mr-2"></i>About Us</Link>
                    <Link class="text-white mb-2" to="/class"><i class="fa fa-angle-right mr-2"></i>Classes</Link>
                    <Link class="text-white mb-2" to="workout"><i class="fa fa-angle-right mr-2"></i>Workouts</Link>
                    <Link class="text-white" to="/blog"><i class="fa fa-angle-right mr-2"></i>Blog</Link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-light mb-4">Links</h4>
                <div class="d-flex flex-column justify-content-start">
                    <Link class="text-white mb-2" to="/diet"><i class="fa fa-angle-right mr-2"></i>Diet</Link>
                    <Link class="text-white mb-2" to="/membership"><i class="fa fa-angle-right mr-2"></i>Membership</Link>
                    
                    <Link class="text-white mb-2" to="/contact"><i class="fa fa-angle-right mr-2"></i>Contact</Link>
                    <Link class="text-white mb-2" to="/signup"><i class="fa fa-angle-right mr-2"></i>Signup</Link>
                    <Link class="text-white mb-2" to="/login"><i class="fa fa-angle-right mr-2"></i>Login</Link>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-5">
                <h4 class="text-light mb-4">Opening Hours</h4>
                <h5 class="text-white">Monday - Friday</h5>
                <p>8.00 AM - 8.00 PM</p>
                <h5 class="text-white">Saturday - Sunday</h5>
                <p>2.00 PM - 8.00 PM</p>
            </div>
        </div>
        <div class="container border-top border-dark pt-5">
            <p class="m-0 text-center text-white">
                &copy; <Link class="text-white font-weight-bold" to="#">Your Site Name</Link>. All Rights Reserved. Designed by
                <Link class="text-white font-weight-bold" to="https://htmlcodex.com">HTML Codex</Link>
            </p>
        </div>
    </div>
 
    <a href="#" class="btn btn-outline-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>

        </div>
    )
}

export default Signup;