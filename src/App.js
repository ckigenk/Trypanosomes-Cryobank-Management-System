import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import Home from "./Components/Home";
import SampleInfo from "./Components/SampleInfo";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home marginTop="40px" />}></Route>
        <Route path="/1" element={<SampleInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
