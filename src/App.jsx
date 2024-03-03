import { Routes , Route } from "react-router-dom"
import { Home,About } from "./components/index"
import { Signup,Login } from "./pages/index"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/" element={<About/>}/>
        </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
