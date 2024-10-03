import React from 'react';
import Header from '../layout/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calcule from '../page/Calcule'


function Home() {
  return (
    <div className="App">
        <Header />
        <Router>
          <Routes>
              <Route path="/calcule" element={<Calcule />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default Home;