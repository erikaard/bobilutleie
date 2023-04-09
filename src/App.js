import Homepage from './pages/Homepage'
import './App.css';
import NavbarComp from './components/Navbar';
import About from './pages/About';
import CalendarComp from './pages/Calendar';
import Contact from './pages/Contact';
import Terms from './pages/Terms'
import FooterComp from './components/Footer';

function App() {
  return (
      <div className="App">
        <NavbarComp />
        <Homepage />
        <About/>
        <CalendarComp />
        <Terms />
        <Contact />
        <FooterComp />
      </div>
  );
}

export default App;
