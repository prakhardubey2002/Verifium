import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Upload from './components/Upload';
import Details from './pages/Details';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ToastContainer
                // position="top-center"
                // autoClose={5000}
                // pauseOnHover
            />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/upload' element={<Upload/>} />
          <Route path='/Details' element={<Details/>}/>
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
