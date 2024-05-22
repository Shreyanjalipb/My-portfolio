import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import About from "./components/AboutMe/Aboutpage";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Router>

    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Routes>
      <Route path="/" element={
            <>
              <Intro />
              <Services />
              <Experience />
              <Works />
              <Portfolio />
              <Testimonial />
              <Contact />
              <Footer />
            </>
          } />
      
      <Route path="/about" element={<About />} />
      </Routes>
     
    </div>
    </Router>

  );
}

export default App;
