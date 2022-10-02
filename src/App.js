import './App.css';
import Header from './components/UI/Header/Header';
import Home from './components/UI/Home/Home';
import Location from './components/Location/Location';
import ContactUs from './components/ContactUs/ContactUs';
import HouseBoats from './components/HouseBoats/HouseBoats';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Location />
      <ContactUs />
      <HouseBoats />
    </div>
  );
}

export default App;
