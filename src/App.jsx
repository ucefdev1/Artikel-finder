import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import SearchSection from "./components/SearchSection";
import FeaturesSection from "./components/FeaturesSection";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LanguageDropDown from "./components/parts/LanguageDropDown";

function App() {
  const [active, setActive] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Set active to true only if the current path is "/about"
    if (location.pathname === '/about') {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.pathname]);


  return (
    <>
      <Header setActive={() => setActive(true)} />
      <Routes>
        <Route path="/" element={
          <>
            <SearchSection  />
            <FeaturesSection active={active} />
          </>
        } />
        <Route path="/about" element={
          <>
            <FeaturesSection active={active} />
          </>
        }/>
      </Routes>
      <Footer />
      <LanguageDropDown/>
    </>
  );
}

export default App;
