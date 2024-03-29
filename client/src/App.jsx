import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/navBar';
import Home from './pages/home';
import AddCode from './pages/AddCode';
import AboutPage from './pages/About';
import ZipToShip from './pages/ZipToShip';
import Categories from './pages/Categories';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      
      <NavBar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/Categories" element={<Categories />} />

        <Route path="/AddCode" element={<AddCode />} />

        <Route path="/About" element={<AboutPage />} />

        <Route path="/ZipToShip" element={<ZipToShip />} />
      
      </Routes>
    
    </Router>
  )
}

export default App
