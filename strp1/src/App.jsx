import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent.jsx";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact.jsx";
import About from "./pages/about/About.jsx";
import Cancel from "./pages/store/Cancel.jsx";
import Store from "./pages/store/Store.jsx";
import Success from "./pages/store/Success.jsx";
import MainPage from "./pages/mainpage/MainPage.jsx";

import CartProvider from "./CartContext.jsx";
import NavbarMain from "./components/maincomponents/NavbarMain.jsx";

//localhost -> Home
// localhost/success -> Success

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <NavbarMain></NavbarMain>
        <BrowserRouter>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="store" element={<Store />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
