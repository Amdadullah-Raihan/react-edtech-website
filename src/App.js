import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Deals from './components/Deals/Deals';
import Success from './components/Success/Success';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path='/courses' element={<Courses></Courses>}></Route>
          <Route path='/deals' element={<Deals></Deals>}></Route>
          <Route path='/success' element={<Success></Success>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>

        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
