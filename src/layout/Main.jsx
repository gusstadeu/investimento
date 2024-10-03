import React from 'react';
import Styles from '../styles/main.module.css';
import Calcule from '../page/Calcule';
import Home from '../page/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div className={Styles.containerMain}>
      <div className={Styles.standardButton}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path="/calcule" element={<Calcule />}/>
          </Routes>
        </Router>

      </div>
    </div>
  );
}

export default Main;