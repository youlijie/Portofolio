
import './App.css';
import './icons/icons.css'
import Header from './components/contenairs/Header';
import Aside from './components/contenairs/Aside';
import Projects from './components/contenairs/Projects';
import Footer from './components/contenairs/Footer';

function App() {
  return (
    <div className="app">
      <div className = "popup"></div>
      <Header />
      <main>
        <Aside />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
