
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>     
        <Routes>
           
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
