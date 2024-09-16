import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <Router>
      <Navbar />
      <main className={`main-content ${isNavbarOpen ? 'shifted' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/about" element={<About />}>About</Route>
          <Route path="/portfolio" element={<Portfolio />}>Portfolio</Route>
          <Route path="/contact" element={<Contact />}>Contact</Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App
