import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import Crew from "./pages/crew"
import Destination from "./pages/destination"
import Technology from "./pages/technology"
import Layout from "./Layout"


function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/technology" element={<Technology />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
