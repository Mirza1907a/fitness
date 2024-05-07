import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Admin(){
	

    const [dailyfood,setdailyfood]  = useState('')
    const [description,setdescription]  = useState('')
    const [time,settime]  = useState('')
const [user,setuser] = useState([])


const adddiet = () =>
{
    axios.post('http://localhost:4000/adddailydiet',{dailyfood,description,time})
}




    return(


        <div>


<nav class="navbar navbar-expand-lg navbar-light bg-dark ">
  <div class="container-fluid">
  <Link class="navbar-brand text-light" to="/admin">Fitness</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
	<ul class="navbar-nav ms-auto" id="menu">
                    <li>
                        <Link to="/dietdata" class="">
                            <span id="heading1" class="nav-text text-light pt-5">Diet Data</span>
                        </Link>
                      
                    </li>
					<li>
                        <Link to="/membershipdetails" class="">
                            <span id="heading1" class="nav-text text-light pt-5">Member Data</span>
                        </Link>
                      
                    </li>

					<li>
                        <Link to="/viewpricing" class="">
                            <span id="heading1" class="nav-text text-light pt-5">Pricing Data</span>
                        </Link>
                      
                    </li>

					<li>
                        <Link to="/addpricing" class="">
                            <span id="heading1" class="nav-text text-light pt-5">Add Pricing </span>
                        </Link>
                      
                    </li>

					<li>
                        <Link  to='/signupdata' class="">
                            <span id="heading1" class="nav-text text-light pt-5">Signup Data </span>
                        </Link>
                      
                    </li>

					<li>
                        <Link to="/workoutdata" class="">
                            <span id="heading1" class="nav-text text-light pt-5">Workout Data </span>
                        </Link>
                      
                    </li>
                    <li>
                        <Link  to='/addexpert' class="">
                            <span id="heading1" class="nav-text text-light pt-5">Add Trainers </span>
                        </Link>
                      
                    </li>

					<li>
                        <Link to="/expertdetails" class="">
                            <span id="heading1" class="nav-text text-light pt-5">Trainers  Data </span>
                        </Link>
                      
                    </li>
                    <li>
                        <Link to="/bmidetails" class="">
                            <span id="heading1" class="nav-text text-light pt-5"> BMI   </span>
                        </Link>
                      
                    </li>
                </ul>
    
    </div>
  </div>
</nav>




<div className="container">
  <input type="text" placeholder="Daily food Intake"  onChange={(e)=>setdailyfood(e.target.value)} className="form-control mt-3"/>
    <input type="text" placeholder="Description"  onChange={(e)=>setdescription(e.target.value)} className="form-control mt-3"/>
    <select class="form-control  mt-3"  onChange={(e)=>settime(e.target.value)}  id="exampleFormControlSelect1">
      <option value="morning">Morning</option>
      <option value="evening">Evening</option>
      <option value="night">Night</option>
      
    </select>
                        <div>
                            <button onClick={adddiet} class="btn btn-dark mt-3"
                             type="submit">Add</button>
                     
                     
                     
                    
                     
                     
                     
                     
                     
                        </div>

  </div>
   

    

      
      
        
        

    </div>
    
   

     
	





    
       
    )
}

export default Admin