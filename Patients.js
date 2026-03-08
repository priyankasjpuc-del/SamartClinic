import React,{useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Patients(){

const [search,setSearch] = useState("")

const patients = [
{id:"P101",name:"Rahul",age:25,disease:"Fever"},
{id:"P102",name:"Anita",age:30,disease:"Diabetes"},
{id:"P103",name:"Ravi",age:40,disease:"Heart Problem"},
{id:"P104",name:"Priya",age:28,disease:"Migraine"}
]

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<h2>Patient Records</h2>

<input
placeholder="Search Patient"
onChange={(e)=>setSearch(e.target.value)}
/>

<table className="table">

<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>Disease</th>
<th>Action</th>
</tr>

{patients
.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()))
.map((p,index)=>(
<tr key={index}>
<td>{p.id}</td>
<td>{p.name}</td>
<td>{p.age}</td>
<td>{p.disease}</td>
<td>
<button>Edit</button>
<button>Delete</button>
</td>
</tr>
))}

</table>

</div>

</div>

)

}

export default Patients