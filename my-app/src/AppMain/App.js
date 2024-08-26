import './App.css';
import MainPage from '../Pages/MainPage/MainPage';
import Cart from '../Pages/Cart/Cart';
import CurrentProduct from '../Pages/CurrentProduct/CurrentProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product/:id" element={<CurrentProduct />} />
          <Route path="/cart" element={<Cart/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;