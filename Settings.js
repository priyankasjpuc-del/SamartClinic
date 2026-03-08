import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings(){

return(

<div className="container">

<Sidebar/>

<div className="main">

<Navbar/>

<h2>System Settings</h2>

<div className="form">

<input placeholder="Clinic Name"/>
<input placeholder="Address"/>
<input placeholder="Phone Number"/>
<input placeholder="Email"/>

<button>Save Settings</button>

</div>

</div>

</div>

)

}

export default Settings