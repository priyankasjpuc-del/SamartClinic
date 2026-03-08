import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import AddPatient from "./pages/AddPatient";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import Reports from "./pages/Reports";
import Billing from "./pages/Billing";
import Pharmacy from "./pages/Pharmacy";
import Settings from "./pages/Settings";

function App() {

return(

<Router>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/patients" element={<Patients/>}/>
<Route path="/addpatient" element={<AddPatient/>}/>
<Route path="/doctors" element={<Doctors/>}/>
<Route path="/appointments" element={<Appointments/>}/>
<Route path="/reports" element={<Reports/>}/>
<Route path="/billing" element={<Billing/>}/>
<Route path="/pharmacy" element={<Pharmacy/>}/>
<Route path="/settings" element={<Settings/>}/>

</Routes>

</Router>

)

}

export default App
