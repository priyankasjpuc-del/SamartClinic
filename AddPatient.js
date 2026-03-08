import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AddPatient(){

const [patient,setPatient] = useState({
name:"",
age:"",
gender:"",
phone:"",
address:"",
disease:"",
doctor:""
})

const handleChange = (e)=>{
setPatient({...patient,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault()
alert("Patient Added Successfully")
console.log(patient)
}

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<h2>Add New Patient</h2>

<form className="form" onSubmit={handleSubmit}>

<input
name="name"
placeholder="Patient Name"
onChange={handleChange}
/>

<input
name="age"
placeholder="Age"
onChange={handleChange}
/>

<select name="gender" onChange={handleChange}>
<option>Select Gender</option>
<option>Male</option>
<option>Female</option>
<option>Other</option>
</select>

<input
name="phone"
placeholder="Phone Number"
onChange={handleChange}
/>

<input
name="address"
placeholder="Address"
onChange={handleChange}
/>

<input
name="disease"
placeholder="Disease"
onChange={handleChange}
/>

<input
name="doctor"
placeholder="Assigned Doctor"
onChange={handleChange}
/>

<button type="submit">Add Patient</button>

</form>

</div>

</div>

)

}

export default AddPatient