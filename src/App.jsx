import Navbar from "./pages/Navbar";
import "./assets/style.css";
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/aboutus" element={<AboutUs/>}/>
          </Routes>
      </div>
      
    </>
  );
}

export default App;
