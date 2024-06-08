import "./App.css";

import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import { Toaster } from "react-hot-toast";
import Footer from "./Pages/Footer";
import Intership from "./Pages/Intership";
import Certificates from "./Pages/Certificates";

function App() {
  return (
    <>
     <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Intership/>
        <Certificates />
        <Footer />
      </div>
      <Toaster />
    </>
    </>
  );
}

export default App;
