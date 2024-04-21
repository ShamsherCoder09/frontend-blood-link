import { Routes, Route } from "react-router-dom"
import { Home, About, WantBlood,BloodAvailable,SetAvailable } from "./components/index"
import { Signup, Login } from "./pages/index"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
function App() {

  return (
    <>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<About />} />
          <Route path="/wantBlood" element={<WantBlood />} />
          <Route path="/blood" element={<BloodAvailable />} />
          <Route path="/setAvailable" element={<SetAvailable />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
