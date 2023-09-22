import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import LetsTalk from './pages/LetsTalk'
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
          <Route path='/lets-talk' element={<LetsTalk/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
