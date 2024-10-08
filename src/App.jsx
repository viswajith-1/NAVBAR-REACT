import Navbar from "./pages/Navbar";
import "./assets/style.css";
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Home from "./pages/Home"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/contactUs":
      component = <ContactUs />
      break
    case "/aboutUs":
      component = <AboutUs />
      break
  }

  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
      
    </>
  );
}

export default App;
