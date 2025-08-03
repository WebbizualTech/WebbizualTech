import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavBar from "./Components/TopNavBar";
import NavBar from "./Components/NavBar";
import HeroSection from "./Pages/HomePage";
import './index.css';

// Dummy Page Components (Replace with your actual pages)
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Portfolio from "./pages/Portfolio";
// import Blog from "./pages/Blog";
// import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <TopNavBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
