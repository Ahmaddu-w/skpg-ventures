import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about/About";
import ProductPage from "./pages/product/ProductPage";
import Contact from "./pages/contact/Contact";
import RequestPage from "./pages/request/RequestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<RequestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
