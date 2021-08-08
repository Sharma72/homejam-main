import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/animated-on3step.css";
import "./styles/main.scss";

import Preloader from "./components/Preloader";

import ScrollToTopBtn from './components/ScrollToTop';
import Home from "./pages/Home";



import Navbar from './components/Nav/Navbar'

function App() {
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
         
          <Navbar/>
          <Route path="/" exact component={Home} />
          
         
          
        <ScrollToTopBtn />  
        </div>
      )}
    </Router>
  );
}

export default App;