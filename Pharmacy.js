import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Pharmacy(){

const medicines = [
{
id:"M101",
name:"Paracetamol",
stock:120,
price:"₹20"
},
{
id:"M102",
name:"Amoxicillin",
stock:80,
price:"₹45"
},
{
id:"M103",
name:"Vitamin C",
stock:200,
price:"₹15"
}
]

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<h2>Pharmacy Management</h2>

<table className="table">

<tr>
<th>Medicine ID</th>
<th>Medicine Name</th>
<th>Stock</th>
<th>Price</th>
</tr>

{medicines.map((m,index)=>(
<tr key={index}>
<td>{m.id}</td>
<td>{m.name}</td>
<td>{m.stock}</td>
<td>{m.price}</td>
</tr>
))}

</table>

</div>

</div>

)

}

export default Pharmacy