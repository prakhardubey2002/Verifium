import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Upload from './components/Upload';
function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/uplaod' element={<Upload/>} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
