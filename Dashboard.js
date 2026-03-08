import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";

function Dashboard(){

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<Cards/>

</div>

</div>

)

}

export default Dashboard