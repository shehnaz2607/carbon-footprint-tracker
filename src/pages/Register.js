import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    await axios.post("http://localhost:5000/api/auth/register", {
      name, email, password
    });
    alert("Account created");
    navigate("/login");
  };

  return (
    <div className="card">
      <h2>Create Account</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={submit}>Register</button>
    </div>
  );
}

export default Register;
