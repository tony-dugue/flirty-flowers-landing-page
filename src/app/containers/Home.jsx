import React, {useEffect, useState} from "react";

// Hooks
import useLocoScroll from "../hooks/useLocoScroll";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import Gallery from "../components/Gallery";
import CustomCursor from "../CustomCursor";

import "../styles/home.scss";

const Home = () => {

  const [preloader, setPreloader] = useState(true)

  useLocoScroll(!preloader)

  useEffect(() => {
    setTimeout( () => {
      setPreloader(false)
    }, 3000)
  }, []);

  return (
    <>
      <CustomCursor />

      { preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div className="main-container" id="main-container" data-scroll-container>
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;

