import './App.css';
import Header from './components/UI/Header/Header';
import Home from './components/UI/Home/Home';
import Location from './components/Location/Location';
import ContactUs from './components/UI/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Location />
      <ContactUs />
    </div>
  );
}

export default App;
