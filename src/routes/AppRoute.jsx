import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/common/Login";
import Register from "../Components/common/Register";


function AppRoute(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <h1 className='text-4xl font-bold text-blue-600 mb-8'>Welcome to Tracking Money</h1>
    <div className="space-x-4">
      <a href="/login" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">Login</a>
      <a href="/register" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">Register</a>
    </div>
  </div>
} />

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

</Routes>

</BrowserRouter>

)

}

export default AppRoute