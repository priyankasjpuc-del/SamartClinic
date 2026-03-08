const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root123",
  database:"clinicdb"
});

db.connect(err=>{
  if(err){
    console.log("Database connection failed",err);
  }else{
    console.log("Database connected successfully");
  }
});

app.get("/",(req,res)=>{
  res.send("Smart Clinic Backend Running");
});


// LOGIN API
app.post("/login",(req,res)=>{
  const {username,password} = req.body;

  const sql = "SELECT * FROM users WHERE username=? AND password=?";

  db.query(sql,[username,password],(err,result)=>{
    if(err) return res.send(err);

    if(result.length>0){
      res.send({status:"success"});
    }else{
      res.send({status:"fail"});
    }
  });
});


// ADD PATIENT
app.post("/add-patient",(req,res)=>{
  const {name,age,gender,phone,address,disease,doctor} = req.body;

  const sql = "INSERT INTO patients(name,age,gender,phone,address,disease,doctor) VALUES(?,?,?,?,?,?,?)";

  db.query(sql,[name,age,gender,phone,address,disease,doctor],(err,result)=>{
    if(err) return res.send(err);

    res.send("Patient added successfully");
  });
});


// GET PATIENTS
app.get("/patients",(req,res)=>{
  db.query("SELECT * FROM patients",(err,result)=>{
    if(err) return res.send(err);

    res.send(result);
  });
});


// GET DOCTORS
app.get("/doctors",(req,res)=>{
  db.query("SELECT * FROM doctors",(err,result)=>{
    if(err) return res.send(err);

    res.send(result);
  });
});


// ADD APPOINTMENT
app.post("/appointment",(req,res)=>{
  const {patient,doctor,date,time,reason} = req.body;

  const sql = "INSERT INTO appointments(patient,doctor,date,time,reason) VALUES(?,?,?,?,?)";

  db.query(sql,[patient,doctor,date,time,reason],(err,result)=>{
    if(err) return res.send(err);

    res.send("Appointment booked");
  });
});


// GET APPOINTMENTS
app.get("/appointments",(req,res)=>{
  db.query("SELECT * FROM appointments",(err,result)=>{
    if(err) return res.send(err);

    res.send(result);
  });
});


// GET MEDICINES
app.get("/medicines",(req,res)=>{
  db.query("SELECT * FROM medicines",(err,result)=>{
    if(err) return res.send(err);

    res.send(result);
  });
});


app.listen(5000,()=>{
  console.log("Server running on port 5000");
});