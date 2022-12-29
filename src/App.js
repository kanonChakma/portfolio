import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
      </main>
    </div>
  );
}

export default App;
