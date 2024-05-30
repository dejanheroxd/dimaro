import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
// import Menu from "./pages/menu/Menu";
import Contact from "./pages/contact/Contact";
import { useEffect, useState } from "react";

function App() {
  const [contactPop, setContactPop] = useState(false);

  function closePopUp() {
    setContactPop(false);
  }

  function openPopUp() {
    setContactPop(true);
  }

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  contactPop={contactPop}
                  closePopUp={closePopUp}
                  openPopUp={openPopUp}
                />
              }
            />
            <Route path="about" element={<About />} />
            {/* <Route path="menu" element={<Menu />} /> */}
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
