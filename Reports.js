import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Reports(){

const reports = [
{
patient:"Rahul",
test:"Blood Test",
result:"Normal"
},
{
patient:"Anita",
test:"X-Ray",
result:"Minor Fracture"
},
{
patient:"Ravi",
test:"MRI",
result:"Under Observation"
}
]

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<h2>Medical Reports</h2>

<table className="table">

<tr>
<th>Patient</th>
<th>Test</th>
<th>Result</th>
</tr>

{reports.map((r,index)=>(
<tr key={index}>
<td>{r.patient}</td>
<td>{r.test}</td>
<td>{r.result}</td>
</tr>
))}

</table>

</div>

</div>

)

}

export default Reports