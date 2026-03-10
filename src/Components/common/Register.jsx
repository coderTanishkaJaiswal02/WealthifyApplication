import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../routes/Slice/authSlice";
import { useNavigate } from "react-router-dom";

export default function Register(){

const dispatch = useDispatch()
const navigate = useNavigate()

const [form,setForm]=useState({
firstName:"",
lastName:"",
email:"",
password:""
})

const submit=(e)=>{
e.preventDefault()

dispatch(registerUser(form))

navigate("/")
}

return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 p-6">

<div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md">

<h2 className="text-2xl font-bold mb-6 text-gray-700">

Create Account

</h2>

<form onSubmit={submit} className="space-y-4">

<input
placeholder="First Name"
className="w-full border p-3 rounded-lg"
onChange={(e)=>setForm({...form,firstName:e.target.value})}
/>

<input
placeholder="Last Name"
className="w-full border p-3 rounded-lg"
onChange={(e)=>setForm({...form,lastName:e.target.value})}
/>

<input
placeholder="Email"
className="w-full border p-3 rounded-lg"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
type="password"
placeholder="Password"
className="w-full border p-3 rounded-lg"
onChange={(e)=>setForm({...form,password:e.target.value})}
/>

<button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">

Register

</button>

</form>

</div>

</div>

)
}