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
import Admin from './pages/Admin';
import Adx from './pages/Adx';
import Sidebar from './components/Sidebar';
import NFTList from './components/NFTList'
import User from './pages/User';
// import { ThirdwebSDKProvider } from "@thirdweb-dev/react/solana";
// import { useWallet } from "@solana/wallet-adapter-react";
function App() {
  // const desiredNetwork = "devnet";
  // const wallet = useWallet();
  return (
    // <ThirdwebSDKProvider network={"devnet"} wallet={wallet}>
    <div className="mx">
      <Navbar />
      <div className="app">
        <BrowserRouter>
          <ToastContainer
          // position="top-center"
          // autoClose={5000}
          // pauseOnHover
          />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/About' element={<About />} />
            <Route path='/Details/:id' element={<Details />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/upload' element={<Upload />} />
            <Route path='/Details' element={<Details />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/adx' element={<Adx />} />
            <Route path='/nftlist/:id' element={<NFTList/>}/>
          </Routes>

        </BrowserRouter>
      </div>
      <Footer />
    </div>
    // </ThirdwebSDKProvider>
  );
}

export default App;
