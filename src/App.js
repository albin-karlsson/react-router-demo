import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Product from "./components/Product";

function App() {
  return (
    // Implementerar den grundläggande funktionaliteten för routing
    <Router>
      <h1>Navbar</h1>
      {/* // Håller koll på att det endast är en Route som gäller för varje sida */}
      <Routes>
        {/* // Våra olika sidor... */}
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/products/:productId"
          element={<Product />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
