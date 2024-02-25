import { Routes,Route } from "react-router-dom"
import { Home,About } from "./components/index"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
