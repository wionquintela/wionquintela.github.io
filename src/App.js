import Headers from "./components/Header";
import 'animate.css';
import { Routes, Route } from "react-router";
import Gallery from "./components/Gallery";
import Links from "./components/Links";
import Backend from "./components/Projects/review-backend/Backend";

import "./index.css";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Headers />}/>
      <Route path="/socials" element={<Links />}/>
    </Routes>
    </>
  );
}

export default App;
