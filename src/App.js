import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './components';
import About from './components/about';
import Class from './components/class';
import Contact from './components/contact';
import Signup from './components/signup';
import Login from './components/login';
import Workout from './components/workout';
import Diet from './components/diet';
import Admin from './components/Dashboard/admin';
import SignupData from './components/Dashboard/signupdata';
import Workoutdata from './components/Dashboard/workoutdata';
import Dietdata from './components/Dashboard/dietdata';
import Blog from './components/blog';
import MemberShip from './components/membership';
import MemberDetails from './components/Dashboard/memberdetails';
import Pricing from './components/Dashboard/pricing';
import PricingDetails from './components/Dashboard/pricingdetails';
import Addexpert from './components/Dashboard/expert';
import Expertdetails from './components/Dashboard/expertdetails';
import BMI from './components/bmi';
import BMIDetails from './components/Dashboard/bmidetails';


function App() {
  return (
    <div className="App">
      <Routes>


        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/workout' element={<Workout/>}/>
        <Route path='/diet' element={<Diet/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/signupdata' element={<SignupData/>}/>
        <Route path='/workoutdata' element={<Workoutdata/>}/>
        <Route path='/dietdata' element={<Dietdata/>}/>
        <Route path='/membership' element={<MemberShip/>}/>
        <Route path='/membershipdetails' element={<MemberDetails/>}/>
        <Route path='/addpricing' element={<Pricing/>}/>
        <Route path='/viewpricing' element={<PricingDetails/>}/>
        <Route path='/addexpert' element={<Addexpert/>}/>
        <Route path='/expertdetails' element={<Expertdetails/>}/>
        <Route path='/bmi' element={<BMI/>}/>
        <Route path='/bmidetails' element={<BMIDetails/>}/>




      </Routes>

    </div>
  );
}

export default App;
