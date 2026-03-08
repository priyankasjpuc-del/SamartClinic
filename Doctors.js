import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Doctors(){

const doctors = [
{
id:"D101",
name:"Dr. Smith",
specialization:"Cardiologist",
experience:"10 Years",
phone:"9876543210"
},
{
id:"D102",
name:"Dr. John",
specialization:"Dentist",
experience:"8 Years",
phone:"9876543211"
},
{
id:"D103",
name:"Dr. Rahul",
specialization:"Neurologist",
experience:"12 Years",
phone:"9876543212"
}
]

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<h2>Doctors List</h2>

<table className="table">

<tr>
<th>ID</th>
<th>Name</th>
<th>Specialization</th>
<th>Experience</th>
<th>Phone</th>
</tr>

{doctors.map((d,index)=>(
<tr key={index}>
<td>{d.id}</td>
<td>{d.name}</td>
<td>{d.specialization}</td>
<td>{d.experience}</td>
<td>{d.phone}</td>
</tr>
))}

</table>

</div>

</div>

)

}

export default Doctors