import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
