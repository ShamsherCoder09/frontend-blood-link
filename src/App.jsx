import { Routes, Route } from "react-router-dom"
import { Home, About, WantBlood,BloodAvailable,SetAvailable,Profile,WantDonate } from "./components/index"
import { Signup, Login, DonerResponse } from "./pages/index"
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
          <Route path="/wantDonate" element={<WantDonate />} />
          <Route path="/blood/:organizationName" element={<BloodAvailable />} />
          <Route path="/setAvailable" element={<SetAvailable />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/donerResponse" element={<DonerResponse />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
