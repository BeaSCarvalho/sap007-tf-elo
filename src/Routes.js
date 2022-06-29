//import React, { useState } from 'react';
import Home from "./pages/home"
import PageResults from "./pages/results"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";

function Paths() {

  return (
    <Router>
      <Routes>
        <Route path='/results' element={<PageResults />} />
        <Route path='/' element={<Home />} /> 
      </Routes>
    </Router> 
  );
}
//  searchedUser={searched} setSearchedUser={setSearched} 
export default Paths;
