import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Menu from "./pages/Menu/Menu.tsx";

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
