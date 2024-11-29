import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
    <Header />
    <main style={{ flex: 1, padding: "0px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
  </div>
  )
}

export default App
