import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project_Test from "./components/projects/Projects";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Projects/:id" element={<Project_Test/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
