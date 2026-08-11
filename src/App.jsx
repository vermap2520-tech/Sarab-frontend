import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Home Page/Header";
import Footer from "./Components/Home Page/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Chefs from "./Pages/Chefs";
import Reviews from "./Pages/Review";
import ProductDetails from "./Components/Details Page/ProductDetails";
import Reservation from "./Pages/Reservation";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;