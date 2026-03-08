import React from "react";
import { Link } from "react-router-dom";
import { FaUserInjured, FaUserMd, FaCalendarCheck, FaFileMedical, FaMoneyBill, FaPills } from "react-icons/fa";

function Sidebar(){

return(

<div className="sidebar">

<h2>Smart Clinic</h2>

<Link to="/dashboard">Dashboard</Link>
<Link to="/patients"><FaUserInjured/> Patients</Link>
<Link to="/addpatient">Add Patient</Link>
<Link to="/doctors"><FaUserMd/> Doctors</Link>
<Link to="/appointments"><FaCalendarCheck/> Appointments</Link>
<Link to="/reports"><FaFileMedical/> Reports</Link>
<Link to="/billing"><FaMoneyBill/> Billing</Link>
<Link to="/pharmacy"><FaPills/> Pharmacy</Link>
<Link to="/settings">Settings</Link>

</div>

)

}

export default Sidebar