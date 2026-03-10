import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/common/Login";
import Register from "../Components/common/Register";


function AppRoute(){

return(

<BrowserRouter>

<Routes>

<Route path="/login" element={<Login/>} />

<Route path="/register" element={<Register/>} />

</Routes>

</BrowserRouter>

)

}

export default AppRoute