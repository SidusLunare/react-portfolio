import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project_1 from "./pages/projects/Project_1";
import Project_2 from "./pages/projects/Project_2";
import Project_3 from "./pages/projects/Project_3";
import Project_4 from "./pages/projects/Project_4";
import Project_5 from "./pages/projects/Project_5";

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
          <Route path="/Projects/project_ouderavond" element={<Project_1 />} />
          <Route path="/Projects/project_leersite" element={<Project_2 />} />
          <Route path="/Projects/project_portfolio" element={<Project_3 />} />
          <Route path="/Projects/project_gamesite" element={<Project_4 />} />
          <Route path="/Projects/project_donatetoplay" element={<Project_5 />} />
        </Routes>
      </BrowserRouter>
    </>
  );  
}

export default App;
