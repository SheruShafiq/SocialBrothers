import "./styles/App.scss";
import React from "react";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
