import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from "react-router-dom";
import './App.css'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import List from './components/ListProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="add" element={<AddProduct />} />
        <Route path="edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App
