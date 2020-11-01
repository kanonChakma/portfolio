import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import Service from './Component/Service/Service';
import About from './Component/About/About';
import NavBar from './Component/NavBar/NavBar';
import Blog from './Component/Blog/Blog';
import Resume from './Component/Resume/Resume';

function App(){
  return (
     <Router>
       <NavBar/>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/service" component={Service}/>
         <Route exact path="/blog" component={Blog}/>
         <Route exact path="/resume" component={Resume}/>
         <Redirect to="/"/>
       </Switch>
     </Router>
  );
}
export default App;
