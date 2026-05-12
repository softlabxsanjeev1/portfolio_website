import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Projectdetail from "./pages/Projectdetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/:id" element={<Projectdetail />} />
      </Routes>
    </>
  );
}

export default App;