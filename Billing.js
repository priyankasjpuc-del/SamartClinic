import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Billing(){

const bills = [
{
id:"B101",
patient:"Rahul",
doctorFee:"₹500",
testFee:"₹300",
total:"₹800"
},
{
id:"B102",
patient:"Anita",
doctorFee:"₹400",
testFee:"₹200",
total:"₹600"
}
]

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<h2>Billing System</h2>

<table className="table">

<tr>
<th>Bill ID</th>
<th>Patient</th>
<th>Doctor Fee</th>
<th>Test Fee</th>
<th>Total</th>
</tr>

{bills.map((b,index)=>(
<tr key={index}>
<td>{b.id}</td>
<td>{b.patient}</td>
<td>{b.doctorFee}</td>
<td>{b.testFee}</td>
<td>{b.total}</td>
</tr>
))}

</table>

</div>

</div>

)

}

export default Billing