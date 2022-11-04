import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './routes/Home'
import Contact from './routes/Contact'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
