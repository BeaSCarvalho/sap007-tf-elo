import React from 'react';
import Home from "./pages/home"
import PageResults from "./pages/results"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';

function Paths() {

  const [search, setSearch] = useState("")
  
  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <Router>
      <Routes>
        <Route path='/results' element={<PageResults searchedUser={search} />} />
        <Route path='/' element={<Home setSearchedUser={setSearch} />} />
      </Routes>
    </Router>
  );
}
//  searchedUser={searched} setSearchedUser={setSearched} 
export default Paths;
