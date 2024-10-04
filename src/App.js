import logo from './logo.svg';
import './App.css';
import Calcule from './page/Calcule.jsx'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import SectionWelcome from './layout/SectionWelcome.jsx'


function App() {
  return (
    <div className="App">
        <Header />
        <SectionWelcome />
        <Calcule />
        <Footer />
    </div>
  );
}

export default App;
