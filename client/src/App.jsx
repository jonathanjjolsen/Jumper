import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/navBar';
import Home from './pages/home';
import AddCode from './pages/AddCode';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      
      <NavBar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/AddCode" element={<AddCode />} />
      
      </Routes>
    
    </Router>
  )
}

export default App
