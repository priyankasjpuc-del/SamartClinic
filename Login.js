import React from "react";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate = useNavigate()

const login = () =>{

navigate("/dashboard")

}

return(

<div className="login">

<h1>Smart Clinic Login</h1>

<input placeholder="Username"/>
<input type="password" placeholder="Password"/>

<button onClick={login}>Login</button>

</div>

)

}

export default Login