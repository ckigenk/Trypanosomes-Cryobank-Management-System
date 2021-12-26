import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import Home from "./Components/Home";
// import SampleInfo from "./Components/SampleInfo";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Components/Data";
import AddSample from "./Components/AddSample";
// import NewHome from "./Components/NewHome";

function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home marginTop="40px" />}></Route>
        <Route path="/1" element={<AddSample />}></Route>
        <Route path="/data" element={<Data />}></Route>
        {/* <Route path="/add" element={<AddSample />}></Route> */}
        {/* <Route path="/new" element={<NewHome />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
