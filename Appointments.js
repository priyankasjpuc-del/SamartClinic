import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Appointments(){

const [appointments,setAppointments] = useState([])

const [form,setForm] = useState({
patient:"",
doctor:"",
date:"",
time:"",
reason:""
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault()

setAppointments([...appointments,form])

setForm({
patient:"",
doctor:"",
date:"",
time:"",
reason:""
})
}

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<h2>Appointment Booking</h2>

<form className="form" onSubmit={handleSubmit}>

<input
name="patient"
placeholder="Patient Name"
value={form.patient}
onChange={handleChange}
/>

<input
name="doctor"
placeholder="Doctor Name"
value={form.doctor}
onChange={handleChange}
/>

<input
type="date"
name="date"
value={form.date}
onChange={handleChange}
/>

<input
type="time"
name="time"
value={form.time}
onChange={handleChange}
/>

<input
name="reason"
placeholder="Reason for Visit"
value={form.reason}
onChange={handleChange}
/>

<button type="submit">Book Appointment</button>

</form>

<h3>Appointments List</h3>

<table className="table">

<thead>
<tr>
<th>Patient</th>
<th>Doctor</th>
<th>Date</th>
<th>Time</th>
<th>Reason</th>
</tr>
</thead>

<tbody>

{appointments.map((a,index)=>(
<tr key={index}>
<td>{a.patient}</td>
<td>{a.doctor}</td>
<td>{a.date}</td>
<td>{a.time}</td>
<td>{a.reason}</td>
</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default Appointments