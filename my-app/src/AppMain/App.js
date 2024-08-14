import './App.css';
import AppHeader from '../App/Header/Header';
import MainBanner from '../App/MainBanner/MainBanner';
import NewArrivals from '../App/NewArrivals/newArrivals';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <AppHeader />
          <MainBanner />
          <NewArrivals />
        </Router>
    </div>
  );
}

export default App;
