import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/navBar';
import Home from './pages/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
