import './App.css';
import Header from './components/UI/Header/Header';
import Home from './components/UI/Home/Home';
import Location from './components/Location/Location';
import ContactUs from './components/ContactUs/ContactUs';
import HouseBoats from './components/HouseBoats/HouseBoats';
import Package from './components/Packages/Packages';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Location />
      <ContactUs />
      <HouseBoats />
      <Package />
    </div>
  );
}

export default App;
