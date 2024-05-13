
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import RoundTrip from './component/RoundTrip';
import MultiCity from './component/MultiCity';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>     
        <Routes>
        <Route path="/round trip" element={<RoundTrip></RoundTrip>}/>
        <Route path="/round trip" element={<MultiCity/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
