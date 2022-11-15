import React, { useState } from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg';
import Todo from './components/Todo';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import LayoutWebsite from './components/Layout/LayoutWebsite';
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LayoutWebsite />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="todo" element={<Todo />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
