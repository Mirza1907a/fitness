import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Workoutdata(){
	const[user,setuser] = useState([]);
	useEffect(()=>
{axios.get('http://localhost:4000/seeworkout')
.then(user=>setuser(user.data)).catch(err=>console.log(err))
    
console.log(user);

},[])
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


<div class="container mt-3">
               <div className="row">
				<div className="col-lg-12">
<div className="card">


	<div class="container">


	<table  className="table table-bordered text-center mt-3">
    <tr>
      
    <th>Exercise Name</th>
        <th>Sets</th>
        <th>Reps</th>
        <th>Weight</th>
            <th>Notes </th>
            <th>Work Out </th>


    </tr>

    {
        user.map((data,index)=>
    <tr>

        <td>{data.exercisename}</td>
        <td>{data.sets}</td>
        <td>{data.reps}</td>
        <td>{data.weight}</td>
        <td>{data.notes}</td>
        <td>{data.workout}</td>



    </tr>
    
    
    
    
    )
    }
</table>

					</div>
</div>
				

					</div>
			   </div>
                
           
        

       

                

             
            </div>



		   
	
			
		   
		
			 
			
		
		
		
		
		
			
				</div>
    )
}

export default Workoutdata