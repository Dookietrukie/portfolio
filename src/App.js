import './App.css';

// Component Imports
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
