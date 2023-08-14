import { 
  BrowserRouter, 
  Route, 
  Switch,
  NavLink,
 } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';

//import { MyApps } from './components/myapps/MyApps';
import About from './components/about';
import Contact from './components/contact';
import Posts from './components/posts';


function App() {
 
  
 return(
    <BrowserRouter>
    <div className='container'>
    <li className='logo'><NavLink 
         activeClassName="active" exact to='/' >My React Apps</NavLink>
      </li>
    <ul className='nav-bar'>
      
      
      {/*<li>
        <NavLink activeClassName="active" to='/myApps' >My apps</NavLink>
 </li>*/}
      <li>
        <NavLink activeClassName="active" to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/contact'>Contact</NavLink>
      </li>
      <li>
      <NavLink activeClassName="active" to='/posts'>Posts</NavLink>
      </li>
    </ul>
    </div>
   
    <Switch>
      <Route exact path="/" >
      <header>
      <h1>My React Apps</h1>
      </header>
        <Home />
      </Route >
      {/*<Route path="/myApps" component={MyApps}>
        <MyApps />
</Route>*/}
      <Route path="/about" >
        <About />
      </Route>
      <Route path="/contact"  >
        <Contact />
      </Route>
      <Route path="/posts" component={Posts} />
      <Route  >
        <NotFound />
      </Route>
      </Switch>
    </BrowserRouter>
    
  )
}

function Home() {
  return (
    <h2>Home</h2>
  )
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}

export default App;