import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Qualification from './components/Qualification';
import ScrollUP from './components/ScrollUp/ScrollUp';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Qualification/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUP/>
    </div>
  );
}

export default App;
