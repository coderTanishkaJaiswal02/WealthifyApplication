import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../routes/Slice/authSlice";
import { Link } from "react-router-dom";

export default function Login(){

const dispatch = useDispatch()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [show,setShow]=useState(false)

const submit=(e)=>{
e.preventDefault()

dispatch(loginUser({email,password}))
}

return(

<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 p-6">

<div className="bg-white rounded-xl shadow-2xl grid md:grid-cols-2 w-full max-w-5xl overflow-hidden">

{/* Left Design */}

<div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white">

<h1 className="text-4xl font-bold mb-4">
Welcome to Wealthify
</h1>

<p className="opacity-90">
Track your money, manage expenses, and grow your financial future.
</p>

</div>

{/* Right Form */}

<div className="p-10">

<h2 className="text-xl font-semibold text-gray-700 mb-6">
User Login
</h2>

<form onSubmit={submit} className="space-y-4">

<input
type="email"
placeholder="Email"
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
onChange={(e)=>setEmail(e.target.value)}
/>

<div className="relative">

<input
type={show?"text":"password"}
placeholder="Password"
className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
type="button"
onClick={()=>setShow(!show)}
className="absolute right-3 top-3 text-sm text-gray-500"
>

{show?"Hide":"Show"}

</button>

</div>

<button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition">

Login

</button>

</form>

<p className="mt-4 text-sm text-gray-500">

New user? 
<Link to="/register" className="text-purple-600 font-semibold ml-1">

Register

</Link>

</p>

</div>

</div>

</div>

)
}