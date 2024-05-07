import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function BMIDetails()
{
    const [user,setuser] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/bmidata')
        .then(user=>setuser(user.data)).catch(err=>console.log(err))
    },[])

    const deletebmi = (id) =>
    {

        axios.delete('http://localhost:4000/bmidelete/'+id).then(res => {console.log(res)
        window.location.reload()});
    
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



<div className='card'>
    <div className='container'>
    <div className='card'>
<table className='table table-bordered text-center mt-3'>
    <tr>

        <th>Name</th>
        <th>Height</th>

        <th>Weight</th>
        <th>Action</th>

    </tr>

    {
        user.map((data,index)=>


        <tr>
            <td>{data.name}</td>
            <td>{data.height}</td>

            <td>{data.weight}</td>
            <td>
                <button onClick={()=>deletebmi(data._id)} className='btn btn-dark '>
                    Delete
                </button>
                </td>


        </tr>
    )
    }
</table>
        </div>
    </div>
</div>

        </div>
    )
}


export default BMIDetails
