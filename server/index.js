const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const userdata = require('./Models/signup.js')
const workoutdata = require('./Models/workout.js')
const memberdata = require('./Models/member.js');
const contactdata = require('./Models/contact.js')
const dietdata = require('./Models/diet.js')
const dailydietdata = require('./Models/dailydiet.js')
const pricingdata = require('./Models/pricing.js');
const expertdata = require('./Models/expert.js');

const bmidata = require('./Models/bmi.js')
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1');
const app = express();
app.use(express.json());
app.use(cors())


//Signup Insert


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/images/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
  })
  const upload = multer({ storage: storage })

app.post('/signup',upload.single('file'),(req,res)=>
{

        const {name,email,pass,number,address,starttime,endtime} = req.body;
        const imagename = req.file.filename;

        const signup = new userdata({
            name,email,pass,number,address,starttime,endtime,
            file : imagename
        })
        
        signup.save();
        console.log(signup);
})
app.post('/addtrainer',upload.single('profile'),(req,res)=>
{

        const {name,details} = req.body;
        const imagename = req.file.filename;

        const expert = new expertdata({
            name,details,
            profile : imagename
        })
        
        expert.save();
        console.log(expert);
})
//Login

app.post('/login',(req,res)=>
{
    const {loginemail ,loginpass} = req.body;
    userdata.findOne({
        email : loginemail
    }).then(user =>
        {
            if(user)
            {
                if(user.role == "users"  && user.pass === loginpass)
                {
                    res.json('userdata')
                }
                else if(user.role == "admin"  && user.pass === loginpass)
                {
                    res.json('admindata');
                }
                else{
                    res.json('password incorrect')
                }
            }
            else
            {
                res.json('no Record found!!!!');
            }


        })
})
app.post('/contact',(req,res)=>
{

  contactdata.create(req.body)
  .then(mydatauser =>res.json(mydatauser))   

})
app.post('/addmember',(req,res)=>
{

    memberdata.create(req.body)
  .then(mydatauser =>res.json(mydatauser))   

})
app.post('/addpricing',(req,res)=>
{

    pricingdata.create(req.body)
  .then(mydatauser =>res.json(mydatauser))   

})
app.get('/memberdetails',(req,res)=>
{
    memberdata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})
app.get('/expertdata',(req,res)=>
{
    expertdata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})
app.get('/pricingdetails',(req,res)=>
{
    pricingdata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})

app.get('/seeworkout',(req,res)=>
{
    workoutdata.find().then(workoutrecord =>res.json(workoutrecord)).
    catch(err=>res.json(err));
})




//Sign up Fetch
app.get('/signupdetails',(req,res)=>
{
    userdata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})


app.get('/dietdetails',(req,res)=>
{
    dietdata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})


app.post('/workout',(req,res)=>
{

  workoutdata.create(req.body)
  .then(mydatauser =>res.json(mydatauser))   


})


app.post('/adddailydiet',(req,res)=>
{

    dailydietdata.create(req.body)
  .then(mydailydiet =>res.json(mydailydiet))   

})
app.post('/diet',(req,res)=>
{

    dietdata.create(req.body)
  .then(mydatauser =>res.json(mydatauser))   

})



app.post('/calculatebmi',(req,res)=>
{
    bmidata.create(req.body)
    .then(mybmi =>res.json(mybmi))   
})

app.get('/bmidata',(req,res)=>
{
    bmidata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})

app.delete('/bmidelete/:id',(req,res)=>
{
    const id = req.params.id;
    bmidata.findByIdAndDelete({_id : id}).then(bmidata=>res.json(bmidata))
})
app.get('/dailydietdetails',(req,res)=>
{
    dailydietdata.find().then(userrecord =>res.json(userrecord)).
    catch(err=>res.json(err));
})
app.delete('/deleted/:id',(req,res)=>
{
    const id = req.params.id;
    dailydietdata.findByIdAndDelete({_id : id}).then(bmidata=>res.json(bmidata))
})

app.listen(4000,()=>
{
    console.log("Server is running");
})


