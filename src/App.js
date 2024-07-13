import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
// import Cart from './pages/Cart';
import {BrowserRouter,  Route, Routes} from 'react-router-dom'; 



function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Navbar />
           <Routes>
              <Route path='/HOME' element={<Home/>} />
              <Route path='/MENU' element={<Menu />} />
              <Route path='/ABOUT' element={<About/>} />
              <Route path='/CONTACT' element={<Contact/>}/>
              {/* <Route path="/CART" element={<Cart />}/> */}
              
            </Routes>
            <Footer/>
 
        </BrowserRouter>
  
     </div> 

  );
}

export default App;
