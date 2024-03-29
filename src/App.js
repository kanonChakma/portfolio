import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Qualification from './components/Qualification';
import ScrollUP from './components/ScrollUp/ScrollUp';
import Skills from './components/Skills';
import Work from './components/Work';
import TeckStack from './components/TechStack'
function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <TeckStack/> 
        <Work/>
        <Qualification/>
        <Contact/>
      </main>
      <ScrollUP/>
    </div>
  );
}

export default App;
