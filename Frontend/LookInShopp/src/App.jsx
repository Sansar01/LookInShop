import { Routes, Route } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AdminLayout from "./components/AdminView/AdminLayout"


function App() {


  return (
    <div className="flex flex-col overflow-hidden bg-white">

      {/* Common Component */}

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>

        </Route>
      </Routes>
    </div>
  )
}

export default App
