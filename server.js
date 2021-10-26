const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const port=8000;
const app= express();

const User=require('./models/User');
const Flanes=require('./models/Flanes');
const Cursos=require('./models/Cursos');
mongoose.connect('mongodb://localhost/userData')


app.use(bodyParser.json());

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})


function sendResponse(res,err,data){
  if (err){
    res.json({
      success: false,
      message: err
    })
  } else if (!data){
    res.json({
      success: false,
      message: "Not Found"
    })
  } else {
    res.json({
      success: true,
      data: data
    })
  }
}

//USUARIOS
app.post('/users',(req,res)=>{
  User.create(
    {...req.body.newData},
    (err,data)=>{sendResponse(res,err,data)}
  )
})

app.route('/users/:id')
.get((req,res)=>{
  User.findById(
    req.params.id,
    (err,data)=>{sendResponse(res,err,data)})
})
.put((req,res)=>{
  User.findByIdAndUpdate(
    req.params.id,
    {...req.body.newData},
    {new:true},
    (err,data)=>{sendResponse(res,err,data)})
})
.delete((req,res)=>{
  User.findByIdAndDelete(
    req.params.id,
    (err,data)=>{sendResponse(res,err,data)})
})


//FLANES
app.post('/flanes',(req,res)=>{
  Flanes.create(
    {...req.body.newData},
    (err,data)=>{sendResponse(res,err,data)}
  )
})

app.route('/flanes/:id')
.get((req,res)=>{
  Flanes.findById(
    req.params.id,
    (err,data)=>{sendResponse(res,err,data)})
})
.put((req,res)=>{
  Flanes.findByIdAndUpdate(
    req.params.id,
    {...req.body.newData},
    {new:true},
    (err,data)=>{sendResponse(res,err,data)})
})
.delete((req,res)=>{
  Flanes.findByIdAndDelete(
    req.params.id,
    (err,data)=>{sendResponse(res,err,data)})
})




//CURSOS
app.post('/cursos',(req,res)=>{
  Cursos.create(
    {...req.body.newData},
    (err,data)=>{sendResponse(res,err,data)}
  )
})

app.route('/cursos/:id')
.get((req,res)=>{
  Cursos.findById(
    req.params.id,
    (err,data)=>{sendResponse(res,err,data)})
})
.put((req,res)=>{
  Cursos.findByIdAndUpdate(
    req.params.id,
    {...req.body.newData},
    {new:true},
    (err,data)=>{sendResponse(res,err,data)})
})
.delete((req,res)=>{
  Cursos.findByIdAndDelete(
    req.params.id,
    (err,data)=>{sendResponse(res,err,data)})
})



