import "./App.css";

import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import { Toaster } from "react-hot-toast";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
     <>
      <div>
        <Navbar />
        <Home />
        <About />
        
        <Footer />
      </div>
      <Toaster />
    </>
    </>
  );
}

export default App;
