import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./css/main.css";
import Adder from './view/Adder';
import Query from './view/Query';

export default function App() {

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/adder">adder</Link>
      <Link to="/query">query</Link>
      <Routes>
        <Route path='/adder' element={<Adder />} />
        <Route path='/query' element={<Query />} />
      </Routes>
    </BrowserRouter>
  );
};
