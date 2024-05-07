import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Addexpert(){


    const [name,setname]  = useState('')
    const [details,setdetails]  = useState('')
    const [profile,setprofile]  = useState([])


    const addtrainer = () => 
    {
        const formdata = new FormData();
        formdata.append("name",name)
        formdata.append("details",details)
        formdata.append("profile",profile)

        axios.post('http://localhost:4000/addtrainer',formdata,{
            headers  : {
                "Content-Type" : "multipart/form-data"
            }
        })
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



		
		   
		
			
		
					<div class="container-fluid mt-3">
					   <div className="row">
						<div className="col-lg-12">
		<div className="card">
			<div class="container">
	<input  type="text" placeholder="Trainer Name" onChange={(e)=>setname(e.target.value)} className="form-control mt-3"/>
    <input  type="text" placeholder="Trainer Details" onChange={(e)=>setdetails(e.target.value)} className="form-control mt-3"/>
    <input  type="file" placeholder="Trainer Details" onChange={(e)=>setprofile(e.target.files[0])} className="form-control mt-3"/>
<button onClick={addtrainer} className="btn btn-dark mt-3 mb-3">Add Trainer</button>
							</div>
		</div>
						
		
							</div>
					   </div>
						
				   
				
		
			   
		
						
		
				
			  
				
				
		
				
			  
			</div>
			
		   
		
			 
			
		
		
		
		
		
			
				</div>
    )
}

export default Addexpert