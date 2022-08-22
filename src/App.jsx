import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./Pages/Home";
import Slider from "./Pages/Slider";
import Tour from "./Pages/Tour";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
