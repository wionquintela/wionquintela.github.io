import Headers from "./components/Header";
import 'animate.css';
import { Routes, Route } from "react-router";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Backend from "./components/Projects/review-backend/Backend";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Headers />}/>
      <Route path="/socials" element={<Links />}/>

      <Route path="/projects" element={<Projects />}/>
      <Route path="/projects/backend" element={<Backend />}/>
    </Routes>
    </>
  );
}

export default App;
